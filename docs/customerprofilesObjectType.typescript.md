# `customerprofilesObjectType` Submodule <a name="`customerprofilesObjectType` Submodule" id="@cdktn/provider-awscc.customerprofilesObjectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesObjectType <a name="CustomerprofilesObjectType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type awscc_customerprofiles_object_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectType(scope: Construct, id: string, config: CustomerprofilesObjectTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig">CustomerprofilesObjectTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig">CustomerprofilesObjectTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys">putKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetAllowProfileCreation">resetAllowProfileCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetExpirationDays">resetExpirationDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetKeys">resetKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetMaxProfileObjectCount">resetMaxProfileObjectCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourceLastUpdatedTimestampFormat">resetSourceLastUpdatedTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourcePriority">resetSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTemplateId">resetTemplateId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields"></a>

```typescript
public putFields(value: IResolvable | CustomerprofilesObjectTypeFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>[]

---

##### `putKeys` <a name="putKeys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys"></a>

```typescript
public putKeys(value: IResolvable | CustomerprofilesObjectTypeKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags"></a>

```typescript
public putTags(value: IResolvable | CustomerprofilesObjectTypeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>[]

---

##### `resetAllowProfileCreation` <a name="resetAllowProfileCreation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetAllowProfileCreation"></a>

```typescript
public resetAllowProfileCreation(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetExpirationDays` <a name="resetExpirationDays" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetExpirationDays"></a>

```typescript
public resetExpirationDays(): void
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetKeys` <a name="resetKeys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetKeys"></a>

```typescript
public resetKeys(): void
```

##### `resetMaxProfileObjectCount` <a name="resetMaxProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetMaxProfileObjectCount"></a>

```typescript
public resetMaxProfileObjectCount(): void
```

##### `resetSourceLastUpdatedTimestampFormat` <a name="resetSourceLastUpdatedTimestampFormat" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourceLastUpdatedTimestampFormat"></a>

```typescript
public resetSourceLastUpdatedTimestampFormat(): void
```

##### `resetSourcePriority` <a name="resetSourcePriority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourcePriority"></a>

```typescript
public resetSourcePriority(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTemplateId"></a>

```typescript
public resetTemplateId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesObjectType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

customerprofilesObjectType.CustomerprofilesObjectType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CustomerprofilesObjectType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesObjectType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesObjectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesObjectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList">CustomerprofilesObjectTypeFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList">CustomerprofilesObjectTypeKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxAvailableProfileObjectCount">maxAvailableProfileObjectCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList">CustomerprofilesObjectTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreationInput">allowProfileCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDaysInput">expirationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keysInput">keysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCountInput">maxProfileObjectCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeNameInput">objectTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormatInput">sourceLastUpdatedTimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriorityInput">sourcePriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreation">allowProfileCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDays">expirationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCount">maxProfileObjectCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormat">sourceLastUpdatedTimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriority">sourcePriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fields"></a>

```typescript
public readonly fields: CustomerprofilesObjectTypeFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList">CustomerprofilesObjectTypeFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keys"></a>

```typescript
public readonly keys: CustomerprofilesObjectTypeKeysList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList">CustomerprofilesObjectTypeKeysList</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `maxAvailableProfileObjectCount`<sup>Required</sup> <a name="maxAvailableProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxAvailableProfileObjectCount"></a>

```typescript
public readonly maxAvailableProfileObjectCount: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tags"></a>

```typescript
public readonly tags: CustomerprofilesObjectTypeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList">CustomerprofilesObjectTypeTagsList</a>

---

##### `allowProfileCreationInput`<sup>Optional</sup> <a name="allowProfileCreationInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreationInput"></a>

```typescript
public readonly allowProfileCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `expirationDaysInput`<sup>Optional</sup> <a name="expirationDaysInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDaysInput"></a>

```typescript
public readonly expirationDaysInput: number;
```

- *Type:* number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | CustomerprofilesObjectTypeFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>[]

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keysInput"></a>

```typescript
public readonly keysInput: IResolvable | CustomerprofilesObjectTypeKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>[]

---

##### `maxProfileObjectCountInput`<sup>Optional</sup> <a name="maxProfileObjectCountInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCountInput"></a>

```typescript
public readonly maxProfileObjectCountInput: number;
```

- *Type:* number

---

##### `objectTypeNameInput`<sup>Optional</sup> <a name="objectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeNameInput"></a>

```typescript
public readonly objectTypeNameInput: string;
```

- *Type:* string

---

##### `sourceLastUpdatedTimestampFormatInput`<sup>Optional</sup> <a name="sourceLastUpdatedTimestampFormatInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormatInput"></a>

```typescript
public readonly sourceLastUpdatedTimestampFormatInput: string;
```

- *Type:* string

---

##### `sourcePriorityInput`<sup>Optional</sup> <a name="sourcePriorityInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriorityInput"></a>

```typescript
public readonly sourcePriorityInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CustomerprofilesObjectTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>[]

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `allowProfileCreation`<sup>Required</sup> <a name="allowProfileCreation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreation"></a>

```typescript
public readonly allowProfileCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDays"></a>

```typescript
public readonly expirationDays: number;
```

- *Type:* number

---

##### `maxProfileObjectCount`<sup>Required</sup> <a name="maxProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCount"></a>

```typescript
public readonly maxProfileObjectCount: number;
```

- *Type:* number

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

---

##### `sourceLastUpdatedTimestampFormat`<sup>Required</sup> <a name="sourceLastUpdatedTimestampFormat" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormat"></a>

```typescript
public readonly sourceLastUpdatedTimestampFormat: string;
```

- *Type:* string

---

##### `sourcePriority`<sup>Required</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriority"></a>

```typescript
public readonly sourcePriority: number;
```

- *Type:* number

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesObjectTypeConfig <a name="CustomerprofilesObjectTypeConfig" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

const customerprofilesObjectTypeConfig: customerprofilesObjectType.CustomerprofilesObjectTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.description">description</a></code> | <code>string</code> | Description of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.domainName">domainName</a></code> | <code>string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | The name of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.allowProfileCreation">allowProfileCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether a profile should be created when data is received. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.expirationDays">expirationDays</a></code> | <code>number</code> | The default number of days until the data within the domain expires. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>[]</code> | A list of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.keys">keys</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>[]</code> | A list of unique keys that can be used to map data to the profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.maxProfileObjectCount">maxProfileObjectCount</a></code> | <code>number</code> | The maximum number of profile objects for this object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourceLastUpdatedTimestampFormat">sourceLastUpdatedTimestampFormat</a></code> | <code>string</code> | The format of your sourceLastUpdatedTimestamp that was previously set up. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourcePriority">sourcePriority</a></code> | <code>number</code> | Defines the priority order of object types. Lower value indicates higher priority. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>[]</code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.templateId">templateId</a></code> | <code>string</code> | A unique identifier for the object template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#description CustomerprofilesObjectType#description}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#domain_name CustomerprofilesObjectType#domain_name}

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

The name of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_name CustomerprofilesObjectType#object_type_name}

---

##### `allowProfileCreation`<sup>Optional</sup> <a name="allowProfileCreation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.allowProfileCreation"></a>

```typescript
public readonly allowProfileCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether a profile should be created when data is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#allow_profile_creation CustomerprofilesObjectType#allow_profile_creation}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#encryption_key CustomerprofilesObjectType#encryption_key}

---

##### `expirationDays`<sup>Optional</sup> <a name="expirationDays" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.expirationDays"></a>

```typescript
public readonly expirationDays: number;
```

- *Type:* number

The default number of days until the data within the domain expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#expiration_days CustomerprofilesObjectType#expiration_days}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | CustomerprofilesObjectTypeFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>[]

A list of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#fields CustomerprofilesObjectType#fields}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.keys"></a>

```typescript
public readonly keys: IResolvable | CustomerprofilesObjectTypeKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>[]

A list of unique keys that can be used to map data to the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#keys CustomerprofilesObjectType#keys}

---

##### `maxProfileObjectCount`<sup>Optional</sup> <a name="maxProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.maxProfileObjectCount"></a>

```typescript
public readonly maxProfileObjectCount: number;
```

- *Type:* number

The maximum number of profile objects for this object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#max_profile_object_count CustomerprofilesObjectType#max_profile_object_count}

---

##### `sourceLastUpdatedTimestampFormat`<sup>Optional</sup> <a name="sourceLastUpdatedTimestampFormat" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourceLastUpdatedTimestampFormat"></a>

```typescript
public readonly sourceLastUpdatedTimestampFormat: string;
```

- *Type:* string

The format of your sourceLastUpdatedTimestamp that was previously set up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#source_last_updated_timestamp_format CustomerprofilesObjectType#source_last_updated_timestamp_format}

---

##### `sourcePriority`<sup>Optional</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourcePriority"></a>

```typescript
public readonly sourcePriority: number;
```

- *Type:* number

Defines the priority order of object types. Lower value indicates higher priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#source_priority CustomerprofilesObjectType#source_priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CustomerprofilesObjectTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>[]

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#tags CustomerprofilesObjectType#tags}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

A unique identifier for the object template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#template_id CustomerprofilesObjectType#template_id}

---

### CustomerprofilesObjectTypeFields <a name="CustomerprofilesObjectTypeFields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

const customerprofilesObjectTypeFields: customerprofilesObjectType.CustomerprofilesObjectTypeFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.objectTypeField">objectTypeField</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | Represents a field in a ProfileObjectType. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}.

---

##### `objectTypeField`<sup>Optional</sup> <a name="objectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.objectTypeField"></a>

```typescript
public readonly objectTypeField: CustomerprofilesObjectTypeFieldsObjectTypeField;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

Represents a field in a ProfileObjectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_field CustomerprofilesObjectType#object_type_field}

---

### CustomerprofilesObjectTypeFieldsObjectTypeField <a name="CustomerprofilesObjectTypeFieldsObjectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

const customerprofilesObjectTypeFieldsObjectTypeField: customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.contentType">contentType</a></code> | <code>string</code> | The content type of the field. Used for determining equality when searching. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.source">source</a></code> | <code>string</code> | A field of a ProfileObject. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.target">target</a></code> | <code>string</code> | The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The content type of the field. Used for determining equality when searching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#content_type CustomerprofilesObjectType#content_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

A field of a ProfileObject.

For example: _source.FirstName, where "_source" is a ProfileObjectType of a Zendesk user and "FirstName" is a field in that ObjectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#source CustomerprofilesObjectType#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#target CustomerprofilesObjectType#target}

---

### CustomerprofilesObjectTypeKeys <a name="CustomerprofilesObjectTypeKeys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

const customerprofilesObjectTypeKeys: customerprofilesObjectType.CustomerprofilesObjectTypeKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.objectTypeKeyList">objectTypeKeyList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_key_list CustomerprofilesObjectType#object_type_key_list}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}.

---

##### `objectTypeKeyList`<sup>Optional</sup> <a name="objectTypeKeyList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.objectTypeKeyList"></a>

```typescript
public readonly objectTypeKeyList: IResolvable | CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_key_list CustomerprofilesObjectType#object_type_key_list}.

---

### CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

const customerprofilesObjectTypeKeysObjectTypeKeyListStruct: customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | The reference for the key name of the fields map. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.standardIdentifiers">standardIdentifiers</a></code> | <code>string[]</code> | The types of keys that a ProfileObject can have. |

---

##### `fieldNames`<sup>Optional</sup> <a name="fieldNames" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

The reference for the key name of the fields map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#field_names CustomerprofilesObjectType#field_names}

---

##### `standardIdentifiers`<sup>Optional</sup> <a name="standardIdentifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.standardIdentifiers"></a>

```typescript
public readonly standardIdentifiers: string[];
```

- *Type:* string[]

The types of keys that a ProfileObject can have.

Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#standard_identifiers CustomerprofilesObjectType#standard_identifiers}

---

### CustomerprofilesObjectTypeTags <a name="CustomerprofilesObjectTypeTags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

const customerprofilesObjectTypeTags: customerprofilesObjectType.CustomerprofilesObjectTypeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#key CustomerprofilesObjectType#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#value CustomerprofilesObjectType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#key CustomerprofilesObjectType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#value CustomerprofilesObjectType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesObjectTypeFieldsList <a name="CustomerprofilesObjectTypeFieldsList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get"></a>

```typescript
public get(index: number): CustomerprofilesObjectTypeFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>[]

---


### CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference <a name="CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeFieldsObjectTypeField;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

---


### CustomerprofilesObjectTypeFieldsOutputReference <a name="CustomerprofilesObjectTypeFieldsOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField">putObjectTypeField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetObjectTypeField">resetObjectTypeField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectTypeField` <a name="putObjectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField"></a>

```typescript
public putObjectTypeField(value: CustomerprofilesObjectTypeFieldsObjectTypeField): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetObjectTypeField` <a name="resetObjectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetObjectTypeField"></a>

```typescript
public resetObjectTypeField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeField">objectTypeField</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference">CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeFieldInput">objectTypeFieldInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectTypeField`<sup>Required</sup> <a name="objectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeField"></a>

```typescript
public readonly objectTypeField: CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference">CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectTypeFieldInput`<sup>Optional</sup> <a name="objectTypeFieldInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeFieldInput"></a>

```typescript
public readonly objectTypeFieldInput: IResolvable | CustomerprofilesObjectTypeFieldsObjectTypeField;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>

---


### CustomerprofilesObjectTypeKeysList <a name="CustomerprofilesObjectTypeKeysList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get"></a>

```typescript
public get(index: number): CustomerprofilesObjectTypeKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>[]

---


### CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get"></a>

```typescript
public get(index: number): CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>[]

---


### CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetFieldNames">resetFieldNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetStandardIdentifiers">resetStandardIdentifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldNames` <a name="resetFieldNames" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetFieldNames"></a>

```typescript
public resetFieldNames(): void
```

##### `resetStandardIdentifiers` <a name="resetStandardIdentifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetStandardIdentifiers"></a>

```typescript
public resetStandardIdentifiers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNamesInput">fieldNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiersInput">standardIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiers">standardIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldNamesInput`<sup>Optional</sup> <a name="fieldNamesInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNamesInput"></a>

```typescript
public readonly fieldNamesInput: string[];
```

- *Type:* string[]

---

##### `standardIdentifiersInput`<sup>Optional</sup> <a name="standardIdentifiersInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiersInput"></a>

```typescript
public readonly standardIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `fieldNames`<sup>Required</sup> <a name="fieldNames" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

---

##### `standardIdentifiers`<sup>Required</sup> <a name="standardIdentifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiers"></a>

```typescript
public readonly standardIdentifiers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>

---


### CustomerprofilesObjectTypeKeysOutputReference <a name="CustomerprofilesObjectTypeKeysOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList">putObjectTypeKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetObjectTypeKeyList">resetObjectTypeKeyList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectTypeKeyList` <a name="putObjectTypeKeyList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList"></a>

```typescript
public putObjectTypeKeyList(value: IResolvable | CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>[]

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetObjectTypeKeyList` <a name="resetObjectTypeKeyList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetObjectTypeKeyList"></a>

```typescript
public resetObjectTypeKeyList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyList">objectTypeKeyList</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList">CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyListInput">objectTypeKeyListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectTypeKeyList`<sup>Required</sup> <a name="objectTypeKeyList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyList"></a>

```typescript
public readonly objectTypeKeyList: CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList">CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectTypeKeyListInput`<sup>Optional</sup> <a name="objectTypeKeyListInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyListInput"></a>

```typescript
public readonly objectTypeKeyListInput: IResolvable | CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>

---


### CustomerprofilesObjectTypeTagsList <a name="CustomerprofilesObjectTypeTagsList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get"></a>

```typescript
public get(index: number): CustomerprofilesObjectTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>[]

---


### CustomerprofilesObjectTypeTagsOutputReference <a name="CustomerprofilesObjectTypeTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer"></a>

```typescript
import { customerprofilesObjectType } from '@cdktn/provider-awscc'

new customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesObjectTypeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>

---



