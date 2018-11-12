import {
  TestBed,
  ComponentFixture,
  inject
} from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  ElementRef,
  ViewContainerRef,
  DebugElement
} from '@angular/core';
import { AgxTypeAheadComponent } from '../../src/modules/agx-typeahead.component';
import { AgxTypeaheadModule } from '../../src/modules/agx-typeahead.module';
import { Key } from '../../src/models';

describe('A Typeahead component', () => {
  let component: AgxTypeAheadComponent;
  let fixture: ComponentFixture<AgxTypeAheadComponent>;
  // let de: DebugElement;
  let spyElementRef;
  let spyViewContainerRef;
  let spyHttp;
  let spyChangeDetectorRef;

  // register all needed dependencies
  beforeEach(() => {
    // setting mocked providers
    spyElementRef = jasmine.createSpyObj('spyElementRef', ['nativeElement']);
    spyViewContainerRef = jasmine.createSpyObj('spyViewContainerRef', ['createEmbeddedView']);
    spyHttp = jasmine.createSpyObj('spyHttp', ['get']);
    spyChangeDetectorRef = jasmine.createSpyObj('spyChangeDetectorRef', ['markForCheck']);

    // setting spy on methods
    spyOn(AgxTypeAheadComponent.prototype, 'filterEnterEvent').and.callThrough();
    spyOn(AgxTypeAheadComponent.prototype, 'listenAndSuggest').and.callThrough();
    spyOn(AgxTypeAheadComponent.prototype, 'navigateWithArrows').and.callThrough();
    spyOn(AgxTypeAheadComponent.prototype, 'onElementKeyDown').and.callThrough();
    spyOn(AgxTypeAheadComponent.prototype, 'renderTemplate');

    TestBed.configureTestingModule({
      declarations: [AgxTypeAheadComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: ElementRef, useValue: spyElementRef },
        { provide: ViewContainerRef, useValue: spyViewContainerRef },
        { provide: HttpClient, useValue: spyHttp },
        { provide: ChangeDetectorRef, useValue: spyChangeDetectorRef },
      ]
    });

    fixture = TestBed.createComponent(AgxTypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });

  describe('Default Inputs', () => {
    it('should have a default taQueryParam', () => {
      expect(component.taQueryParam).toBe('q');
    });

    it('should have a default undefined taCallbackParamValue', () => {
      expect(component.taCallbackParamValue).toBeUndefined();
    });

    it('should have a default taApi', () => {
      expect(component.taApi).toBe('jsonp');
    });

    it('should have a default taApiMethod', () => {
      expect(component.taApiMethod).toBe('get');
    });
  });

  describe('Component Init', () => {
    it('should create a keydown observable', () => {
      expect(component.onElementKeyDown).toHaveBeenCalled();
    });

    it('should create a filter enter event subscription', () => {
      expect(component.filterEnterEvent).toHaveBeenCalledTimes(1);
    });

    it('should create a listen and suggest subscription', () => {
      expect(component.listenAndSuggest).toHaveBeenCalledTimes(1);
    });

    it('should create a navigation with arrows subscription', () => {
      expect(component.navigateWithArrows).toHaveBeenCalledTimes(1);
    });

    it('should render template', () => {
      expect(component.renderTemplate).toHaveBeenCalled();
    });
  });

  describe('Functionality', () => {
    it('should hide suggestion when ESC is pressed', () => {
      const mockedEvent = {
        keyCode: Key.Escape,
        preventDefault: () => undefined,
      } as KeyboardEvent;
      component.handleEsc(mockedEvent);
      const actual = component.showSuggestions;
      const expected = false;
      expect(actual).toBe(expected);
    });
  });
});
