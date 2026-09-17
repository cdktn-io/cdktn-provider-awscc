# `invoicingProcurementPortalPreference` Submodule <a name="`invoicingProcurementPortalPreference` Submodule" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingProcurementPortalPreference <a name="InvoicingProcurementPortalPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference(scope: Construct, id: string, config: InvoicingProcurementPortalPreferenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig">InvoicingProcurementPortalPreferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig">InvoicingProcurementPortalPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts">putContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference">putEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference">putTestEnvPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetEinvoiceDeliveryPreference">resetEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalInstanceEndpoint">resetProcurementPortalInstanceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalSharedSecret">resetProcurementPortalSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTestEnvPreference">resetTestEnvPreference</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContacts` <a name="putContacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts"></a>

```typescript
public putContacts(value: IResolvable | InvoicingProcurementPortalPreferenceContacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]

---

##### `putEinvoiceDeliveryPreference` <a name="putEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference"></a>

```typescript
public putEinvoiceDeliveryPreference(value: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---

##### `putSelector` <a name="putSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector"></a>

```typescript
public putSelector(value: InvoicingProcurementPortalPreferenceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags"></a>

```typescript
public putTags(value: IResolvable | InvoicingProcurementPortalPreferenceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]

---

##### `putTestEnvPreference` <a name="putTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference"></a>

```typescript
public putTestEnvPreference(value: InvoicingProcurementPortalPreferenceTestEnvPreference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---

##### `resetEinvoiceDeliveryPreference` <a name="resetEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetEinvoiceDeliveryPreference"></a>

```typescript
public resetEinvoiceDeliveryPreference(): void
```

##### `resetProcurementPortalInstanceEndpoint` <a name="resetProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalInstanceEndpoint"></a>

```typescript
public resetProcurementPortalInstanceEndpoint(): void
```

##### `resetProcurementPortalSharedSecret` <a name="resetProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalSharedSecret"></a>

```typescript
public resetProcurementPortalSharedSecret(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTestEnvPreference` <a name="resetTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTestEnvPreference"></a>

```typescript
public resetTestEnvPreference(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a InvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InvoicingProcurementPortalPreference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InvoicingProcurementPortalPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the InvoicingProcurementPortalPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contacts">contacts</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList">InvoicingProcurementPortalPreferenceContactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference">einvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus">einvoiceDeliveryPreferenceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lastUpdateDate">lastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn">procurementPortalPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint">purchaseOrderRetrievalEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus">purchaseOrderRetrievalPreferenceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference">InvoicingProcurementPortalPreferenceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList">InvoicingProcurementPortalPreferenceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreference">testEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomainInput">buyerDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifierInput">buyerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contactsInput">contactsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabledInput">einvoiceDeliveryEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceInput">einvoiceDeliveryPreferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpointInput">procurementPortalInstanceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalNameInput">procurementPortalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecretInput">procurementPortalSharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabledInput">purchaseOrderRetrievalEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selectorInput">selectorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomainInput">supplierDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifierInput">supplierIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreferenceInput">testEnvPreferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomain">buyerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifier">buyerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled">einvoiceDeliveryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalName">procurementPortalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled">purchaseOrderRetrievalEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomain">supplierDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifier">supplierIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contacts"></a>

```typescript
public readonly contacts: InvoicingProcurementPortalPreferenceContactsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList">InvoicingProcurementPortalPreferenceContactsList</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `einvoiceDeliveryPreference`<sup>Required</sup> <a name="einvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference"></a>

```typescript
public readonly einvoiceDeliveryPreference: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a>

---

##### `einvoiceDeliveryPreferenceStatus`<sup>Required</sup> <a name="einvoiceDeliveryPreferenceStatus" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus"></a>

```typescript
public readonly einvoiceDeliveryPreferenceStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lastUpdateDate"></a>

```typescript
public readonly lastUpdateDate: string;
```

- *Type:* string

---

##### `procurementPortalPreferenceArn`<sup>Required</sup> <a name="procurementPortalPreferenceArn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn"></a>

```typescript
public readonly procurementPortalPreferenceArn: string;
```

- *Type:* string

---

##### `purchaseOrderRetrievalEndpoint`<sup>Required</sup> <a name="purchaseOrderRetrievalEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint"></a>

```typescript
public readonly purchaseOrderRetrievalEndpoint: string;
```

- *Type:* string

---

##### `purchaseOrderRetrievalPreferenceStatus`<sup>Required</sup> <a name="purchaseOrderRetrievalPreferenceStatus" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus"></a>

```typescript
public readonly purchaseOrderRetrievalPreferenceStatus: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selector"></a>

```typescript
public readonly selector: InvoicingProcurementPortalPreferenceSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference">InvoicingProcurementPortalPreferenceSelectorOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tags"></a>

```typescript
public readonly tags: InvoicingProcurementPortalPreferenceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList">InvoicingProcurementPortalPreferenceTagsList</a>

---

##### `testEnvPreference`<sup>Required</sup> <a name="testEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreference"></a>

```typescript
public readonly testEnvPreference: InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `buyerDomainInput`<sup>Optional</sup> <a name="buyerDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomainInput"></a>

```typescript
public readonly buyerDomainInput: string;
```

- *Type:* string

---

##### `buyerIdentifierInput`<sup>Optional</sup> <a name="buyerIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifierInput"></a>

```typescript
public readonly buyerIdentifierInput: string;
```

- *Type:* string

---

##### `contactsInput`<sup>Optional</sup> <a name="contactsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contactsInput"></a>

```typescript
public readonly contactsInput: IResolvable | InvoicingProcurementPortalPreferenceContacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]

---

##### `einvoiceDeliveryEnabledInput`<sup>Optional</sup> <a name="einvoiceDeliveryEnabledInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabledInput"></a>

```typescript
public readonly einvoiceDeliveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `einvoiceDeliveryPreferenceInput`<sup>Optional</sup> <a name="einvoiceDeliveryPreferenceInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceInput"></a>

```typescript
public readonly einvoiceDeliveryPreferenceInput: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---

##### `procurementPortalInstanceEndpointInput`<sup>Optional</sup> <a name="procurementPortalInstanceEndpointInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpointInput"></a>

```typescript
public readonly procurementPortalInstanceEndpointInput: string;
```

- *Type:* string

---

##### `procurementPortalNameInput`<sup>Optional</sup> <a name="procurementPortalNameInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalNameInput"></a>

```typescript
public readonly procurementPortalNameInput: string;
```

- *Type:* string

---

##### `procurementPortalSharedSecretInput`<sup>Optional</sup> <a name="procurementPortalSharedSecretInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecretInput"></a>

```typescript
public readonly procurementPortalSharedSecretInput: string;
```

- *Type:* string

---

##### `purchaseOrderRetrievalEnabledInput`<sup>Optional</sup> <a name="purchaseOrderRetrievalEnabledInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabledInput"></a>

```typescript
public readonly purchaseOrderRetrievalEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selectorInput"></a>

```typescript
public readonly selectorInput: IResolvable | InvoicingProcurementPortalPreferenceSelector;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---

##### `supplierDomainInput`<sup>Optional</sup> <a name="supplierDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomainInput"></a>

```typescript
public readonly supplierDomainInput: string;
```

- *Type:* string

---

##### `supplierIdentifierInput`<sup>Optional</sup> <a name="supplierIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifierInput"></a>

```typescript
public readonly supplierIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | InvoicingProcurementPortalPreferenceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]

---

##### `testEnvPreferenceInput`<sup>Optional</sup> <a name="testEnvPreferenceInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreferenceInput"></a>

```typescript
public readonly testEnvPreferenceInput: IResolvable | InvoicingProcurementPortalPreferenceTestEnvPreference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomain"></a>

```typescript
public readonly buyerDomain: string;
```

- *Type:* string

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifier"></a>

```typescript
public readonly buyerIdentifier: string;
```

- *Type:* string

---

##### `einvoiceDeliveryEnabled`<sup>Required</sup> <a name="einvoiceDeliveryEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled"></a>

```typescript
public readonly einvoiceDeliveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `procurementPortalInstanceEndpoint`<sup>Required</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint"></a>

```typescript
public readonly procurementPortalInstanceEndpoint: string;
```

- *Type:* string

---

##### `procurementPortalName`<sup>Required</sup> <a name="procurementPortalName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalName"></a>

```typescript
public readonly procurementPortalName: string;
```

- *Type:* string

---

##### `procurementPortalSharedSecret`<sup>Required</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecret"></a>

```typescript
public readonly procurementPortalSharedSecret: string;
```

- *Type:* string

---

##### `purchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="purchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled"></a>

```typescript
public readonly purchaseOrderRetrievalEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomain"></a>

```typescript
public readonly supplierDomain: string;
```

- *Type:* string

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifier"></a>

```typescript
public readonly supplierIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingProcurementPortalPreferenceConfig <a name="InvoicingProcurementPortalPreferenceConfig" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const invoicingProcurementPortalPreferenceConfig: invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerDomain">buyerDomain</a></code> | <code>string</code> | The domain identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerIdentifier">buyerIdentifier</a></code> | <code>string</code> | The unique identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.contacts">contacts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]</code> | List of contact information for portal administrators and technical contacts. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryEnabled">einvoiceDeliveryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether e-invoice delivery is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalName">procurementPortalName</a></code> | <code>string</code> | The name of the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.purchaseOrderRetrievalEnabled">purchaseOrderRetrievalEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether purchase order retrieval is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierDomain">supplierDomain</a></code> | <code>string</code> | The domain identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierIdentifier">supplierIdentifier</a></code> | <code>string</code> | The unique identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryPreference">einvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | Specifies the preferences for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>string</code> | The endpoint URL where e-invoices are delivered to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>string</code> | The shared secret or authentication credential used for secure communication with the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | Specifies criteria for selecting which invoices should be processed. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]</code> | The tags associated with this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.testEnvPreference">testEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | Configuration settings for the test environment of the procurement portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerDomain"></a>

```typescript
public readonly buyerDomain: string;
```

- *Type:* string

The domain identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerIdentifier"></a>

```typescript
public readonly buyerIdentifier: string;
```

- *Type:* string

The unique identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.contacts"></a>

```typescript
public readonly contacts: IResolvable | InvoicingProcurementPortalPreferenceContacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]

List of contact information for portal administrators and technical contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#contacts InvoicingProcurementPortalPreference#contacts}

---

##### `einvoiceDeliveryEnabled`<sup>Required</sup> <a name="einvoiceDeliveryEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryEnabled"></a>

```typescript
public readonly einvoiceDeliveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether e-invoice delivery is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_enabled InvoicingProcurementPortalPreference#einvoice_delivery_enabled}

---

##### `procurementPortalName`<sup>Required</sup> <a name="procurementPortalName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalName"></a>

```typescript
public readonly procurementPortalName: string;
```

- *Type:* string

The name of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_name InvoicingProcurementPortalPreference#procurement_portal_name}

---

##### `purchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="purchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.purchaseOrderRetrievalEnabled"></a>

```typescript
public readonly purchaseOrderRetrievalEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether purchase order retrieval is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_retrieval_enabled InvoicingProcurementPortalPreference#purchase_order_retrieval_enabled}

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierDomain"></a>

```typescript
public readonly supplierDomain: string;
```

- *Type:* string

The domain identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierIdentifier"></a>

```typescript
public readonly supplierIdentifier: string;
```

- *Type:* string

The unique identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

##### `einvoiceDeliveryPreference`<sup>Optional</sup> <a name="einvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryPreference"></a>

```typescript
public readonly einvoiceDeliveryPreference: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

Specifies the preferences for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_preference InvoicingProcurementPortalPreference#einvoice_delivery_preference}

---

##### `procurementPortalInstanceEndpoint`<sup>Optional</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalInstanceEndpoint"></a>

```typescript
public readonly procurementPortalInstanceEndpoint: string;
```

- *Type:* string

The endpoint URL where e-invoices are delivered to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `procurementPortalSharedSecret`<sup>Optional</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalSharedSecret"></a>

```typescript
public readonly procurementPortalSharedSecret: string;
```

- *Type:* string

The shared secret or authentication credential used for secure communication with the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.selector"></a>

```typescript
public readonly selector: InvoicingProcurementPortalPreferenceSelector;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

Specifies criteria for selecting which invoices should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#selector InvoicingProcurementPortalPreference#selector}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | InvoicingProcurementPortalPreferenceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]

The tags associated with this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#tags InvoicingProcurementPortalPreference#tags}

---

##### `testEnvPreference`<sup>Optional</sup> <a name="testEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.testEnvPreference"></a>

```typescript
public readonly testEnvPreference: InvoicingProcurementPortalPreferenceTestEnvPreference;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

Configuration settings for the test environment of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#test_env_preference InvoicingProcurementPortalPreference#test_env_preference}

---

### InvoicingProcurementPortalPreferenceContacts <a name="InvoicingProcurementPortalPreferenceContacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const invoicingProcurementPortalPreferenceContacts: invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.email">email</a></code> | <code>string</code> | The email address of the contact person or role. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.name">name</a></code> | <code>string</code> | The name of the contact person or role. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address of the contact person or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#email InvoicingProcurementPortalPreference#email}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the contact person or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#name InvoicingProcurementPortalPreference#name}

---

### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const invoicingProcurementPortalPreferenceEinvoiceDeliveryPreference: invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.connectionTestingMethod">connectionTestingMethod</a></code> | <code>string</code> | The method to use for testing the connection to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryActivationDate">einvoiceDeliveryActivationDate</a></code> | <code>string</code> | The ISO 8601 date-time when e-invoice delivery should be activated. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryAttachmentTypes">einvoiceDeliveryAttachmentTypes</a></code> | <code>string[]</code> | The types of attachments to include with the e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryDocumentTypes">einvoiceDeliveryDocumentTypes</a></code> | <code>string[]</code> | The types of e-invoice documents to be delivered. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.protocol">protocol</a></code> | <code>string</code> | The communication protocol to use for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.purchaseOrderDataSources">purchaseOrderDataSources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]</code> | The sources of purchase order data. |

---

##### `connectionTestingMethod`<sup>Optional</sup> <a name="connectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.connectionTestingMethod"></a>

```typescript
public readonly connectionTestingMethod: string;
```

- *Type:* string

The method to use for testing the connection to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#connection_testing_method InvoicingProcurementPortalPreference#connection_testing_method}

---

##### `einvoiceDeliveryActivationDate`<sup>Optional</sup> <a name="einvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryActivationDate"></a>

```typescript
public readonly einvoiceDeliveryActivationDate: string;
```

- *Type:* string

The ISO 8601 date-time when e-invoice delivery should be activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_activation_date InvoicingProcurementPortalPreference#einvoice_delivery_activation_date}

---

##### `einvoiceDeliveryAttachmentTypes`<sup>Optional</sup> <a name="einvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryAttachmentTypes"></a>

```typescript
public readonly einvoiceDeliveryAttachmentTypes: string[];
```

- *Type:* string[]

The types of attachments to include with the e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_attachment_types InvoicingProcurementPortalPreference#einvoice_delivery_attachment_types}

---

##### `einvoiceDeliveryDocumentTypes`<sup>Optional</sup> <a name="einvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryDocumentTypes"></a>

```typescript
public readonly einvoiceDeliveryDocumentTypes: string[];
```

- *Type:* string[]

The types of e-invoice documents to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_types InvoicingProcurementPortalPreference#einvoice_delivery_document_types}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The communication protocol to use for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#protocol InvoicingProcurementPortalPreference#protocol}

---

##### `purchaseOrderDataSources`<sup>Optional</sup> <a name="purchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.purchaseOrderDataSources"></a>

```typescript
public readonly purchaseOrderDataSources: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]

The sources of purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_sources InvoicingProcurementPortalPreference#purchase_order_data_sources}

---

### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const invoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources: invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.einvoiceDeliveryDocumentType">einvoiceDeliveryDocumentType</a></code> | <code>string</code> | The type of e-invoice document that requires purchase order data. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.purchaseOrderDataSourceType">purchaseOrderDataSourceType</a></code> | <code>string</code> | The type of source for purchase order data. |

---

##### `einvoiceDeliveryDocumentType`<sup>Optional</sup> <a name="einvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.einvoiceDeliveryDocumentType"></a>

```typescript
public readonly einvoiceDeliveryDocumentType: string;
```

- *Type:* string

The type of e-invoice document that requires purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_type InvoicingProcurementPortalPreference#einvoice_delivery_document_type}

---

##### `purchaseOrderDataSourceType`<sup>Optional</sup> <a name="purchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.purchaseOrderDataSourceType"></a>

```typescript
public readonly purchaseOrderDataSourceType: string;
```

- *Type:* string

The type of source for purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_source_type InvoicingProcurementPortalPreference#purchase_order_data_source_type}

---

### InvoicingProcurementPortalPreferenceSelector <a name="InvoicingProcurementPortalPreferenceSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const invoicingProcurementPortalPreferenceSelector: invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.property.invoiceUnitArns">invoiceUnitArns</a></code> | <code>string[]</code> | The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies. |

---

##### `invoiceUnitArns`<sup>Optional</sup> <a name="invoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.property.invoiceUnitArns"></a>

```typescript
public readonly invoiceUnitArns: string[];
```

- *Type:* string[]

The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#invoice_unit_arns InvoicingProcurementPortalPreference#invoice_unit_arns}

---

### InvoicingProcurementPortalPreferenceTags <a name="InvoicingProcurementPortalPreferenceTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const invoicingProcurementPortalPreferenceTags: invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#key InvoicingProcurementPortalPreference#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#value InvoicingProcurementPortalPreference#value}

---

### InvoicingProcurementPortalPreferenceTestEnvPreference <a name="InvoicingProcurementPortalPreferenceTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const invoicingProcurementPortalPreferenceTestEnvPreference: invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerDomain">buyerDomain</a></code> | <code>string</code> | The domain identifier for the buyer in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerIdentifier">buyerIdentifier</a></code> | <code>string</code> | The unique identifier for the buyer in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>string</code> | The endpoint URL for e-invoice delivery in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>string</code> | The shared secret for secure communication in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierDomain">supplierDomain</a></code> | <code>string</code> | The domain identifier for the supplier in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierIdentifier">supplierIdentifier</a></code> | <code>string</code> | The unique identifier for the supplier in the test environment. |

---

##### `buyerDomain`<sup>Optional</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerDomain"></a>

```typescript
public readonly buyerDomain: string;
```

- *Type:* string

The domain identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `buyerIdentifier`<sup>Optional</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerIdentifier"></a>

```typescript
public readonly buyerIdentifier: string;
```

- *Type:* string

The unique identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `procurementPortalInstanceEndpoint`<sup>Optional</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalInstanceEndpoint"></a>

```typescript
public readonly procurementPortalInstanceEndpoint: string;
```

- *Type:* string

The endpoint URL for e-invoice delivery in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `procurementPortalSharedSecret`<sup>Optional</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalSharedSecret"></a>

```typescript
public readonly procurementPortalSharedSecret: string;
```

- *Type:* string

The shared secret for secure communication in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `supplierDomain`<sup>Optional</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierDomain"></a>

```typescript
public readonly supplierDomain: string;
```

- *Type:* string

The domain identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `supplierIdentifier`<sup>Optional</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierIdentifier"></a>

```typescript
public readonly supplierIdentifier: string;
```

- *Type:* string

The unique identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingProcurementPortalPreferenceContactsList <a name="InvoicingProcurementPortalPreferenceContactsList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get"></a>

```typescript
public get(index: number): InvoicingProcurementPortalPreferenceContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceContacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]

---


### InvoicingProcurementPortalPreferenceContactsOutputReference <a name="InvoicingProcurementPortalPreferenceContactsOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceContacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources">putPurchaseOrderDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetConnectionTestingMethod">resetConnectionTestingMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryActivationDate">resetEinvoiceDeliveryActivationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryAttachmentTypes">resetEinvoiceDeliveryAttachmentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryDocumentTypes">resetEinvoiceDeliveryDocumentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetPurchaseOrderDataSources">resetPurchaseOrderDataSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPurchaseOrderDataSources` <a name="putPurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources"></a>

```typescript
public putPurchaseOrderDataSources(value: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]

---

##### `resetConnectionTestingMethod` <a name="resetConnectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetConnectionTestingMethod"></a>

```typescript
public resetConnectionTestingMethod(): void
```

##### `resetEinvoiceDeliveryActivationDate` <a name="resetEinvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryActivationDate"></a>

```typescript
public resetEinvoiceDeliveryActivationDate(): void
```

##### `resetEinvoiceDeliveryAttachmentTypes` <a name="resetEinvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryAttachmentTypes"></a>

```typescript
public resetEinvoiceDeliveryAttachmentTypes(): void
```

##### `resetEinvoiceDeliveryDocumentTypes` <a name="resetEinvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryDocumentTypes"></a>

```typescript
public resetEinvoiceDeliveryDocumentTypes(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetPurchaseOrderDataSources` <a name="resetPurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetPurchaseOrderDataSources"></a>

```typescript
public resetPurchaseOrderDataSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources">purchaseOrderDataSources</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethodInput">connectionTestingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDateInput">einvoiceDeliveryActivationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypesInput">einvoiceDeliveryAttachmentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypesInput">einvoiceDeliveryDocumentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSourcesInput">purchaseOrderDataSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod">connectionTestingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate">einvoiceDeliveryActivationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes">einvoiceDeliveryAttachmentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes">einvoiceDeliveryDocumentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `purchaseOrderDataSources`<sup>Required</sup> <a name="purchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources"></a>

```typescript
public readonly purchaseOrderDataSources: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a>

---

##### `connectionTestingMethodInput`<sup>Optional</sup> <a name="connectionTestingMethodInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethodInput"></a>

```typescript
public readonly connectionTestingMethodInput: string;
```

- *Type:* string

---

##### `einvoiceDeliveryActivationDateInput`<sup>Optional</sup> <a name="einvoiceDeliveryActivationDateInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDateInput"></a>

```typescript
public readonly einvoiceDeliveryActivationDateInput: string;
```

- *Type:* string

---

##### `einvoiceDeliveryAttachmentTypesInput`<sup>Optional</sup> <a name="einvoiceDeliveryAttachmentTypesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypesInput"></a>

```typescript
public readonly einvoiceDeliveryAttachmentTypesInput: string[];
```

- *Type:* string[]

---

##### `einvoiceDeliveryDocumentTypesInput`<sup>Optional</sup> <a name="einvoiceDeliveryDocumentTypesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypesInput"></a>

```typescript
public readonly einvoiceDeliveryDocumentTypesInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `purchaseOrderDataSourcesInput`<sup>Optional</sup> <a name="purchaseOrderDataSourcesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSourcesInput"></a>

```typescript
public readonly purchaseOrderDataSourcesInput: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]

---

##### `connectionTestingMethod`<sup>Required</sup> <a name="connectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod"></a>

```typescript
public readonly connectionTestingMethod: string;
```

- *Type:* string

---

##### `einvoiceDeliveryActivationDate`<sup>Required</sup> <a name="einvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate"></a>

```typescript
public readonly einvoiceDeliveryActivationDate: string;
```

- *Type:* string

---

##### `einvoiceDeliveryAttachmentTypes`<sup>Required</sup> <a name="einvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes"></a>

```typescript
public readonly einvoiceDeliveryAttachmentTypes: string[];
```

- *Type:* string[]

---

##### `einvoiceDeliveryDocumentTypes`<sup>Required</sup> <a name="einvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes"></a>

```typescript
public readonly einvoiceDeliveryDocumentTypes: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get"></a>

```typescript
public get(index: number): InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetEinvoiceDeliveryDocumentType">resetEinvoiceDeliveryDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetPurchaseOrderDataSourceType">resetPurchaseOrderDataSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEinvoiceDeliveryDocumentType` <a name="resetEinvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetEinvoiceDeliveryDocumentType"></a>

```typescript
public resetEinvoiceDeliveryDocumentType(): void
```

##### `resetPurchaseOrderDataSourceType` <a name="resetPurchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetPurchaseOrderDataSourceType"></a>

```typescript
public resetPurchaseOrderDataSourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentTypeInput">einvoiceDeliveryDocumentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceTypeInput">purchaseOrderDataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType">einvoiceDeliveryDocumentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType">purchaseOrderDataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `einvoiceDeliveryDocumentTypeInput`<sup>Optional</sup> <a name="einvoiceDeliveryDocumentTypeInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentTypeInput"></a>

```typescript
public readonly einvoiceDeliveryDocumentTypeInput: string;
```

- *Type:* string

---

##### `purchaseOrderDataSourceTypeInput`<sup>Optional</sup> <a name="purchaseOrderDataSourceTypeInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceTypeInput"></a>

```typescript
public readonly purchaseOrderDataSourceTypeInput: string;
```

- *Type:* string

---

##### `einvoiceDeliveryDocumentType`<sup>Required</sup> <a name="einvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType"></a>

```typescript
public readonly einvoiceDeliveryDocumentType: string;
```

- *Type:* string

---

##### `purchaseOrderDataSourceType`<sup>Required</sup> <a name="purchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType"></a>

```typescript
public readonly purchaseOrderDataSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>

---


### InvoicingProcurementPortalPreferenceSelectorOutputReference <a name="InvoicingProcurementPortalPreferenceSelectorOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resetInvoiceUnitArns">resetInvoiceUnitArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvoiceUnitArns` <a name="resetInvoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resetInvoiceUnitArns"></a>

```typescript
public resetInvoiceUnitArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArnsInput">invoiceUnitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns">invoiceUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invoiceUnitArnsInput`<sup>Optional</sup> <a name="invoiceUnitArnsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArnsInput"></a>

```typescript
public readonly invoiceUnitArnsInput: string[];
```

- *Type:* string[]

---

##### `invoiceUnitArns`<sup>Required</sup> <a name="invoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns"></a>

```typescript
public readonly invoiceUnitArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceSelector;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---


### InvoicingProcurementPortalPreferenceTagsList <a name="InvoicingProcurementPortalPreferenceTagsList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get"></a>

```typescript
public get(index: number): InvoicingProcurementPortalPreferenceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]

---


### InvoicingProcurementPortalPreferenceTagsOutputReference <a name="InvoicingProcurementPortalPreferenceTagsOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>

---


### InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference <a name="InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer"></a>

```typescript
import { invoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerDomain">resetBuyerDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerIdentifier">resetBuyerIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalInstanceEndpoint">resetProcurementPortalInstanceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalSharedSecret">resetProcurementPortalSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierDomain">resetSupplierDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierIdentifier">resetSupplierIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuyerDomain` <a name="resetBuyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerDomain"></a>

```typescript
public resetBuyerDomain(): void
```

##### `resetBuyerIdentifier` <a name="resetBuyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerIdentifier"></a>

```typescript
public resetBuyerIdentifier(): void
```

##### `resetProcurementPortalInstanceEndpoint` <a name="resetProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalInstanceEndpoint"></a>

```typescript
public resetProcurementPortalInstanceEndpoint(): void
```

##### `resetProcurementPortalSharedSecret` <a name="resetProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalSharedSecret"></a>

```typescript
public resetProcurementPortalSharedSecret(): void
```

##### `resetSupplierDomain` <a name="resetSupplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierDomain"></a>

```typescript
public resetSupplierDomain(): void
```

##### `resetSupplierIdentifier` <a name="resetSupplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierIdentifier"></a>

```typescript
public resetSupplierIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomainInput">buyerDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifierInput">buyerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpointInput">procurementPortalInstanceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecretInput">procurementPortalSharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomainInput">supplierDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifierInput">supplierIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain">buyerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier">buyerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain">supplierDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier">supplierIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buyerDomainInput`<sup>Optional</sup> <a name="buyerDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomainInput"></a>

```typescript
public readonly buyerDomainInput: string;
```

- *Type:* string

---

##### `buyerIdentifierInput`<sup>Optional</sup> <a name="buyerIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifierInput"></a>

```typescript
public readonly buyerIdentifierInput: string;
```

- *Type:* string

---

##### `procurementPortalInstanceEndpointInput`<sup>Optional</sup> <a name="procurementPortalInstanceEndpointInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpointInput"></a>

```typescript
public readonly procurementPortalInstanceEndpointInput: string;
```

- *Type:* string

---

##### `procurementPortalSharedSecretInput`<sup>Optional</sup> <a name="procurementPortalSharedSecretInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecretInput"></a>

```typescript
public readonly procurementPortalSharedSecretInput: string;
```

- *Type:* string

---

##### `supplierDomainInput`<sup>Optional</sup> <a name="supplierDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomainInput"></a>

```typescript
public readonly supplierDomainInput: string;
```

- *Type:* string

---

##### `supplierIdentifierInput`<sup>Optional</sup> <a name="supplierIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifierInput"></a>

```typescript
public readonly supplierIdentifierInput: string;
```

- *Type:* string

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain"></a>

```typescript
public readonly buyerDomain: string;
```

- *Type:* string

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier"></a>

```typescript
public readonly buyerIdentifier: string;
```

- *Type:* string

---

##### `procurementPortalInstanceEndpoint`<sup>Required</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint"></a>

```typescript
public readonly procurementPortalInstanceEndpoint: string;
```

- *Type:* string

---

##### `procurementPortalSharedSecret`<sup>Required</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret"></a>

```typescript
public readonly procurementPortalSharedSecret: string;
```

- *Type:* string

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain"></a>

```typescript
public readonly supplierDomain: string;
```

- *Type:* string

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier"></a>

```typescript
public readonly supplierIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InvoicingProcurementPortalPreferenceTestEnvPreference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---



