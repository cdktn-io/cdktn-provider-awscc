# `smsvoicePhoneNumber` Submodule <a name="`smsvoicePhoneNumber` Submodule" id="@cdktn/provider-awscc.smsvoicePhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoicePhoneNumber <a name="SmsvoicePhoneNumber" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number awscc_smsvoice_phone_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumber(scope: Construct, id: string, config: SmsvoicePhoneNumberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig">SmsvoicePhoneNumberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig">SmsvoicePhoneNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords">putMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords">putOptionalKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay">putTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptionalKeywords">resetOptionalKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptOutListName">resetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetSelfManagedOptOutsEnabled">resetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTwoWay">resetTwoWay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMandatoryKeywords` <a name="putMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords"></a>

```typescript
public putMandatoryKeywords(value: SmsvoicePhoneNumberMandatoryKeywords): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---

##### `putOptionalKeywords` <a name="putOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords"></a>

```typescript
public putOptionalKeywords(value: IResolvable | SmsvoicePhoneNumberOptionalKeywords[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags"></a>

```typescript
public putTags(value: IResolvable | SmsvoicePhoneNumberTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]

---

##### `putTwoWay` <a name="putTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay"></a>

```typescript
public putTwoWay(value: SmsvoicePhoneNumberTwoWay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetOptionalKeywords` <a name="resetOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptionalKeywords"></a>

```typescript
public resetOptionalKeywords(): void
```

##### `resetOptOutListName` <a name="resetOptOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptOutListName"></a>

```typescript
public resetOptOutListName(): void
```

##### `resetSelfManagedOptOutsEnabled` <a name="resetSelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetSelfManagedOptOutsEnabled"></a>

```typescript
public resetSelfManagedOptOutsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTwoWay` <a name="resetTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTwoWay"></a>

```typescript
public resetTwoWay(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoicePhoneNumber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoicePhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoicePhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywords">mandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference">SmsvoicePhoneNumberMandatoryKeywordsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywords">optionalKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList">SmsvoicePhoneNumberOptionalKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList">SmsvoicePhoneNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWay">twoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference">SmsvoicePhoneNumberTwoWayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCodeInput">isoCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywordsInput">mandatoryKeywordsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilitiesInput">numberCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberTypeInput">numberTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywordsInput">optionalKeywordsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListNameInput">optOutListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabledInput">selfManagedOptOutsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWayInput">twoWayInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilities">numberCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberType">numberType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListName">optOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mandatoryKeywords`<sup>Required</sup> <a name="mandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywords"></a>

```typescript
public readonly mandatoryKeywords: SmsvoicePhoneNumberMandatoryKeywordsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference">SmsvoicePhoneNumberMandatoryKeywordsOutputReference</a>

---

##### `optionalKeywords`<sup>Required</sup> <a name="optionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywords"></a>

```typescript
public readonly optionalKeywords: SmsvoicePhoneNumberOptionalKeywordsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList">SmsvoicePhoneNumberOptionalKeywordsList</a>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tags"></a>

```typescript
public readonly tags: SmsvoicePhoneNumberTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList">SmsvoicePhoneNumberTagsList</a>

---

##### `twoWay`<sup>Required</sup> <a name="twoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWay"></a>

```typescript
public readonly twoWay: SmsvoicePhoneNumberTwoWayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference">SmsvoicePhoneNumberTwoWayOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isoCountryCodeInput`<sup>Optional</sup> <a name="isoCountryCodeInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCodeInput"></a>

```typescript
public readonly isoCountryCodeInput: string;
```

- *Type:* string

---

##### `mandatoryKeywordsInput`<sup>Optional</sup> <a name="mandatoryKeywordsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywordsInput"></a>

```typescript
public readonly mandatoryKeywordsInput: IResolvable | SmsvoicePhoneNumberMandatoryKeywords;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---

##### `numberCapabilitiesInput`<sup>Optional</sup> <a name="numberCapabilitiesInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilitiesInput"></a>

```typescript
public readonly numberCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `numberTypeInput`<sup>Optional</sup> <a name="numberTypeInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberTypeInput"></a>

```typescript
public readonly numberTypeInput: string;
```

- *Type:* string

---

##### `optionalKeywordsInput`<sup>Optional</sup> <a name="optionalKeywordsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywordsInput"></a>

```typescript
public readonly optionalKeywordsInput: IResolvable | SmsvoicePhoneNumberOptionalKeywords[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]

---

##### `optOutListNameInput`<sup>Optional</sup> <a name="optOutListNameInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListNameInput"></a>

```typescript
public readonly optOutListNameInput: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="selfManagedOptOutsEnabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabledInput"></a>

```typescript
public readonly selfManagedOptOutsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SmsvoicePhoneNumberTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]

---

##### `twoWayInput`<sup>Optional</sup> <a name="twoWayInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWayInput"></a>

```typescript
public readonly twoWayInput: IResolvable | SmsvoicePhoneNumberTwoWay;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

---

##### `numberCapabilities`<sup>Required</sup> <a name="numberCapabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilities"></a>

```typescript
public readonly numberCapabilities: string[];
```

- *Type:* string[]

---

##### `numberType`<sup>Required</sup> <a name="numberType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberType"></a>

```typescript
public readonly numberType: string;
```

- *Type:* string

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoicePhoneNumberConfig <a name="SmsvoicePhoneNumberConfig" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

const smsvoicePhoneNumberConfig: smsvoicePhoneNumber.SmsvoicePhoneNumberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.mandatoryKeywords">mandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberCapabilities">numberCapabilities</a></code> | <code>string[]</code> | Indicates if the phone number will be used for text messages, voice messages, or both. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberType">numberType</a></code> | <code>string</code> | The type of phone number to request. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true the sender ID can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optionalKeywords">optionalKeywords</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]</code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optOutListName">optOutListName</a></code> | <code>string</code> | The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.twoWay">twoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#iso_country_code SmsvoicePhoneNumber#iso_country_code}

---

##### `mandatoryKeywords`<sup>Required</sup> <a name="mandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.mandatoryKeywords"></a>

```typescript
public readonly mandatoryKeywords: SmsvoicePhoneNumberMandatoryKeywords;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#mandatory_keywords SmsvoicePhoneNumber#mandatory_keywords}

---

##### `numberCapabilities`<sup>Required</sup> <a name="numberCapabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberCapabilities"></a>

```typescript
public readonly numberCapabilities: string[];
```

- *Type:* string[]

Indicates if the phone number will be used for text messages, voice messages, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#number_capabilities SmsvoicePhoneNumber#number_capabilities}

---

##### `numberType`<sup>Required</sup> <a name="numberType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberType"></a>

```typescript
public readonly numberType: string;
```

- *Type:* string

The type of phone number to request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#number_type SmsvoicePhoneNumber#number_type}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true the sender ID can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#deletion_protection_enabled SmsvoicePhoneNumber#deletion_protection_enabled}

---

##### `optionalKeywords`<sup>Optional</sup> <a name="optionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optionalKeywords"></a>

```typescript
public readonly optionalKeywords: IResolvable | SmsvoicePhoneNumberOptionalKeywords[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#optional_keywords SmsvoicePhoneNumber#optional_keywords}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#opt_out_list_name SmsvoicePhoneNumber#opt_out_list_name}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#self_managed_opt_outs_enabled SmsvoicePhoneNumber#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SmsvoicePhoneNumberTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#tags SmsvoicePhoneNumber#tags}

---

##### `twoWay`<sup>Optional</sup> <a name="twoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.twoWay"></a>

```typescript
public readonly twoWay: SmsvoicePhoneNumberTwoWay;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#two_way SmsvoicePhoneNumber#two_way}

---

### SmsvoicePhoneNumberMandatoryKeywords <a name="SmsvoicePhoneNumberMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

const smsvoicePhoneNumberMandatoryKeywords: smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.help"></a>

```typescript
public readonly help: SmsvoicePhoneNumberMandatoryKeywordsHelp;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#help SmsvoicePhoneNumber#help}

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.stop"></a>

```typescript
public readonly stop: SmsvoicePhoneNumberMandatoryKeywordsStop;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#stop SmsvoicePhoneNumber#stop}

---

### SmsvoicePhoneNumberMandatoryKeywordsHelp <a name="SmsvoicePhoneNumberMandatoryKeywordsHelp" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

const smsvoicePhoneNumberMandatoryKeywordsHelp: smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberMandatoryKeywordsStop <a name="SmsvoicePhoneNumberMandatoryKeywordsStop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

const smsvoicePhoneNumberMandatoryKeywordsStop: smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberOptionalKeywords <a name="SmsvoicePhoneNumberOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

const smsvoicePhoneNumberOptionalKeywords: smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.keyword">keyword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}.

---

##### `keyword`<sup>Optional</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.keyword"></a>

```typescript
public readonly keyword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberTags <a name="SmsvoicePhoneNumberTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

const smsvoicePhoneNumberTags: smsvoicePhoneNumber.SmsvoicePhoneNumberTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#key SmsvoicePhoneNumber#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#value SmsvoicePhoneNumber#value}

---

### SmsvoicePhoneNumberTwoWay <a name="SmsvoicePhoneNumberTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

const smsvoicePhoneNumberTwoWay: smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelArn">channelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelRole">channelRole</a></code> | <code>string</code> | An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | By default this is set to false. |

---

##### `channelArn`<sup>Optional</sup> <a name="channelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelArn"></a>

```typescript
public readonly channelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#channel_arn SmsvoicePhoneNumber#channel_arn}

---

##### `channelRole`<sup>Optional</sup> <a name="channelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelRole"></a>

```typescript
public readonly channelRole: string;
```

- *Type:* string

An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#channel_role SmsvoicePhoneNumber#channel_role}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

By default this is set to false.

When set to true you can receive incoming text messages from your end recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#enabled SmsvoicePhoneNumber#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoicePhoneNumberMandatoryKeywordsHelp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---


### SmsvoicePhoneNumberMandatoryKeywordsOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp">putHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop">putStop</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHelp` <a name="putHelp" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp"></a>

```typescript
public putHelp(value: SmsvoicePhoneNumberMandatoryKeywordsHelp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---

##### `putStop` <a name="putStop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop"></a>

```typescript
public putStop(value: SmsvoicePhoneNumberMandatoryKeywordsStop): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference">SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference">SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.helpInput">helpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stopInput">stopInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.help"></a>

```typescript
public readonly help: SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference">SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference</a>

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stop"></a>

```typescript
public readonly stop: SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference">SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference</a>

---

##### `helpInput`<sup>Optional</sup> <a name="helpInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.helpInput"></a>

```typescript
public readonly helpInput: IResolvable | SmsvoicePhoneNumberMandatoryKeywordsHelp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---

##### `stopInput`<sup>Optional</sup> <a name="stopInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stopInput"></a>

```typescript
public readonly stopInput: IResolvable | SmsvoicePhoneNumberMandatoryKeywordsStop;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoicePhoneNumberMandatoryKeywords;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---


### SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoicePhoneNumberMandatoryKeywordsStop;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---


### SmsvoicePhoneNumberOptionalKeywordsList <a name="SmsvoicePhoneNumberOptionalKeywordsList" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get"></a>

```typescript
public get(index: number): SmsvoicePhoneNumberOptionalKeywordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoicePhoneNumberOptionalKeywords[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]

---


### SmsvoicePhoneNumberOptionalKeywordsOutputReference <a name="SmsvoicePhoneNumberOptionalKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetKeyword">resetKeyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetKeyword` <a name="resetKeyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetKeyword"></a>

```typescript
public resetKeyword(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keywordInput">keywordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keyword">keyword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `keywordInput`<sup>Optional</sup> <a name="keywordInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keywordInput"></a>

```typescript
public readonly keywordInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keyword"></a>

```typescript
public readonly keyword: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoicePhoneNumberOptionalKeywords;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>

---


### SmsvoicePhoneNumberTagsList <a name="SmsvoicePhoneNumberTagsList" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get"></a>

```typescript
public get(index: number): SmsvoicePhoneNumberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoicePhoneNumberTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]

---


### SmsvoicePhoneNumberTagsOutputReference <a name="SmsvoicePhoneNumberTagsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoicePhoneNumberTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>

---


### SmsvoicePhoneNumberTwoWayOutputReference <a name="SmsvoicePhoneNumberTwoWayOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer"></a>

```typescript
import { smsvoicePhoneNumber } from '@cdktn/provider-awscc'

new smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelArn">resetChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelRole">resetChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelArn` <a name="resetChannelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelArn"></a>

```typescript
public resetChannelArn(): void
```

##### `resetChannelRole` <a name="resetChannelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelRole"></a>

```typescript
public resetChannelRole(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArnInput">channelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRoleInput">channelRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArn">channelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRole">channelRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelArnInput`<sup>Optional</sup> <a name="channelArnInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArnInput"></a>

```typescript
public readonly channelArnInput: string;
```

- *Type:* string

---

##### `channelRoleInput`<sup>Optional</sup> <a name="channelRoleInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRoleInput"></a>

```typescript
public readonly channelRoleInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArn"></a>

```typescript
public readonly channelArn: string;
```

- *Type:* string

---

##### `channelRole`<sup>Required</sup> <a name="channelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRole"></a>

```typescript
public readonly channelRole: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoicePhoneNumberTwoWay;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---



