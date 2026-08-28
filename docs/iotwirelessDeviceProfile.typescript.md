# `iotwirelessDeviceProfile` Submodule <a name="`iotwirelessDeviceProfile` Submodule" id="@cdktn/provider-awscc.iotwirelessDeviceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessDeviceProfile <a name="IotwirelessDeviceProfile" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile awscc_iotwireless_device_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

new iotwirelessDeviceProfile.IotwirelessDeviceProfile(scope: Construct, id: string, config?: IotwirelessDeviceProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig">IotwirelessDeviceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig">IotwirelessDeviceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetLoRaWan">resetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan"></a>

```typescript
public putLoRaWan(value: IotwirelessDeviceProfileLoRaWan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessDeviceProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]

---

##### `resetLoRaWan` <a name="resetLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetLoRaWan"></a>

```typescript
public resetLoRaWan(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessDeviceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessDeviceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessDeviceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.deviceProfileId">deviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference">IotwirelessDeviceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList">IotwirelessDeviceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWanInput">loRaWanInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deviceProfileId`<sup>Required</sup> <a name="deviceProfileId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.deviceProfileId"></a>

```typescript
public readonly deviceProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessDeviceProfileLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference">IotwirelessDeviceProfileLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tags"></a>

```typescript
public readonly tags: IotwirelessDeviceProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList">IotwirelessDeviceProfileTagsList</a>

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWanInput"></a>

```typescript
public readonly loRaWanInput: IResolvable | IotwirelessDeviceProfileLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessDeviceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessDeviceProfileConfig <a name="IotwirelessDeviceProfileConfig" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.Initializer"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

const iotwirelessDeviceProfileConfig: iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.name">name</a></code> | <code>string</code> | Name of service profile. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]</code> | A list of key-value pairs that contain metadata for the device profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessDeviceProfileLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#lo_ra_wan IotwirelessDeviceProfile#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#name IotwirelessDeviceProfile#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessDeviceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]

A list of key-value pairs that contain metadata for the device profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#tags IotwirelessDeviceProfile#tags}

---

### IotwirelessDeviceProfileLoRaWan <a name="IotwirelessDeviceProfileLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.Initializer"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

const iotwirelessDeviceProfileLoRaWan: iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classBTimeout">classBTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classCTimeout">classCTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.factoryPresetFreqsList">factoryPresetFreqsList</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#factory_preset_freqs_list IotwirelessDeviceProfile#factory_preset_freqs_list}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.macVersion">macVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#mac_version IotwirelessDeviceProfile#mac_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxDutyCycle">maxDutyCycle</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxEirp">maxEirp</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#max_eirp IotwirelessDeviceProfile#max_eirp}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotDr">pingSlotDr</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotFreq">pingSlotFreq</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotPeriod">pingSlotPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.regParamsRevision">regParamsRevision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rfRegion">rfRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rf_region IotwirelessDeviceProfile#rf_region}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDataRate2">rxDataRate2</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_data_rate_2 IotwirelessDeviceProfile#rx_data_rate_2}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDelay1">rxDelay1</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_delay_1 IotwirelessDeviceProfile#rx_delay_1}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDrOffset1">rxDrOffset1</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_dr_offset_1 IotwirelessDeviceProfile#rx_dr_offset_1}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxFreq2">rxFreq2</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_freq_2 IotwirelessDeviceProfile#rx_freq_2}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supports32BitFCnt">supports32BitFCnt</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassB">supportsClassB</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_class_b IotwirelessDeviceProfile#supports_class_b}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassC">supportsClassC</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_class_c IotwirelessDeviceProfile#supports_class_c}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsJoin">supportsJoin</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_join IotwirelessDeviceProfile#supports_join}. |

---

##### `classBTimeout`<sup>Optional</sup> <a name="classBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classBTimeout"></a>

```typescript
public readonly classBTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}.

---

##### `classCTimeout`<sup>Optional</sup> <a name="classCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classCTimeout"></a>

```typescript
public readonly classCTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}.

---

##### `factoryPresetFreqsList`<sup>Optional</sup> <a name="factoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.factoryPresetFreqsList"></a>

```typescript
public readonly factoryPresetFreqsList: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#factory_preset_freqs_list IotwirelessDeviceProfile#factory_preset_freqs_list}.

---

##### `macVersion`<sup>Optional</sup> <a name="macVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.macVersion"></a>

```typescript
public readonly macVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#mac_version IotwirelessDeviceProfile#mac_version}.

---

##### `maxDutyCycle`<sup>Optional</sup> <a name="maxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxDutyCycle"></a>

```typescript
public readonly maxDutyCycle: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}.

---

##### `maxEirp`<sup>Optional</sup> <a name="maxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxEirp"></a>

```typescript
public readonly maxEirp: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#max_eirp IotwirelessDeviceProfile#max_eirp}.

---

##### `pingSlotDr`<sup>Optional</sup> <a name="pingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotDr"></a>

```typescript
public readonly pingSlotDr: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}.

---

##### `pingSlotFreq`<sup>Optional</sup> <a name="pingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotFreq"></a>

```typescript
public readonly pingSlotFreq: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}.

---

##### `pingSlotPeriod`<sup>Optional</sup> <a name="pingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotPeriod"></a>

```typescript
public readonly pingSlotPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}.

---

##### `regParamsRevision`<sup>Optional</sup> <a name="regParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.regParamsRevision"></a>

```typescript
public readonly regParamsRevision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}.

---

##### `rfRegion`<sup>Optional</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rfRegion"></a>

```typescript
public readonly rfRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rf_region IotwirelessDeviceProfile#rf_region}.

---

##### `rxDataRate2`<sup>Optional</sup> <a name="rxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDataRate2"></a>

```typescript
public readonly rxDataRate2: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_data_rate_2 IotwirelessDeviceProfile#rx_data_rate_2}.

---

##### `rxDelay1`<sup>Optional</sup> <a name="rxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDelay1"></a>

```typescript
public readonly rxDelay1: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_delay_1 IotwirelessDeviceProfile#rx_delay_1}.

---

##### `rxDrOffset1`<sup>Optional</sup> <a name="rxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDrOffset1"></a>

```typescript
public readonly rxDrOffset1: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_dr_offset_1 IotwirelessDeviceProfile#rx_dr_offset_1}.

---

##### `rxFreq2`<sup>Optional</sup> <a name="rxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxFreq2"></a>

```typescript
public readonly rxFreq2: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_freq_2 IotwirelessDeviceProfile#rx_freq_2}.

---

##### `supports32BitFCnt`<sup>Optional</sup> <a name="supports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supports32BitFCnt"></a>

```typescript
public readonly supports32BitFCnt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}.

---

##### `supportsClassB`<sup>Optional</sup> <a name="supportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassB"></a>

```typescript
public readonly supportsClassB: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_class_b IotwirelessDeviceProfile#supports_class_b}.

---

##### `supportsClassC`<sup>Optional</sup> <a name="supportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassC"></a>

```typescript
public readonly supportsClassC: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_class_c IotwirelessDeviceProfile#supports_class_c}.

---

##### `supportsJoin`<sup>Optional</sup> <a name="supportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsJoin"></a>

```typescript
public readonly supportsJoin: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_join IotwirelessDeviceProfile#supports_join}.

---

### IotwirelessDeviceProfileTags <a name="IotwirelessDeviceProfileTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.Initializer"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

const iotwirelessDeviceProfileTags: iotwirelessDeviceProfile.IotwirelessDeviceProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#key IotwirelessDeviceProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#value IotwirelessDeviceProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#key IotwirelessDeviceProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#value IotwirelessDeviceProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessDeviceProfileLoRaWanOutputReference <a name="IotwirelessDeviceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

new iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassBTimeout">resetClassBTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassCTimeout">resetClassCTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetFactoryPresetFreqsList">resetFactoryPresetFreqsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMacVersion">resetMacVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxDutyCycle">resetMaxDutyCycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxEirp">resetMaxEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotDr">resetPingSlotDr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotFreq">resetPingSlotFreq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotPeriod">resetPingSlotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRegParamsRevision">resetRegParamsRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRfRegion">resetRfRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDataRate2">resetRxDataRate2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDelay1">resetRxDelay1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDrOffset1">resetRxDrOffset1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxFreq2">resetRxFreq2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupports32BitFCnt">resetSupports32BitFCnt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassB">resetSupportsClassB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassC">resetSupportsClassC</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsJoin">resetSupportsJoin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassBTimeout` <a name="resetClassBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassBTimeout"></a>

```typescript
public resetClassBTimeout(): void
```

##### `resetClassCTimeout` <a name="resetClassCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassCTimeout"></a>

```typescript
public resetClassCTimeout(): void
```

##### `resetFactoryPresetFreqsList` <a name="resetFactoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetFactoryPresetFreqsList"></a>

```typescript
public resetFactoryPresetFreqsList(): void
```

##### `resetMacVersion` <a name="resetMacVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMacVersion"></a>

```typescript
public resetMacVersion(): void
```

##### `resetMaxDutyCycle` <a name="resetMaxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxDutyCycle"></a>

```typescript
public resetMaxDutyCycle(): void
```

##### `resetMaxEirp` <a name="resetMaxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxEirp"></a>

```typescript
public resetMaxEirp(): void
```

##### `resetPingSlotDr` <a name="resetPingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotDr"></a>

```typescript
public resetPingSlotDr(): void
```

##### `resetPingSlotFreq` <a name="resetPingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotFreq"></a>

```typescript
public resetPingSlotFreq(): void
```

##### `resetPingSlotPeriod` <a name="resetPingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotPeriod"></a>

```typescript
public resetPingSlotPeriod(): void
```

##### `resetRegParamsRevision` <a name="resetRegParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRegParamsRevision"></a>

```typescript
public resetRegParamsRevision(): void
```

##### `resetRfRegion` <a name="resetRfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRfRegion"></a>

```typescript
public resetRfRegion(): void
```

##### `resetRxDataRate2` <a name="resetRxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDataRate2"></a>

```typescript
public resetRxDataRate2(): void
```

##### `resetRxDelay1` <a name="resetRxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDelay1"></a>

```typescript
public resetRxDelay1(): void
```

##### `resetRxDrOffset1` <a name="resetRxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDrOffset1"></a>

```typescript
public resetRxDrOffset1(): void
```

##### `resetRxFreq2` <a name="resetRxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxFreq2"></a>

```typescript
public resetRxFreq2(): void
```

##### `resetSupports32BitFCnt` <a name="resetSupports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupports32BitFCnt"></a>

```typescript
public resetSupports32BitFCnt(): void
```

##### `resetSupportsClassB` <a name="resetSupportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassB"></a>

```typescript
public resetSupportsClassB(): void
```

##### `resetSupportsClassC` <a name="resetSupportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassC"></a>

```typescript
public resetSupportsClassC(): void
```

##### `resetSupportsJoin` <a name="resetSupportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsJoin"></a>

```typescript
public resetSupportsJoin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeoutInput">classBTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeoutInput">classCTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsListInput">factoryPresetFreqsListInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersionInput">macVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycleInput">maxDutyCycleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirpInput">maxEirpInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDrInput">pingSlotDrInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreqInput">pingSlotFreqInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriodInput">pingSlotPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevisionInput">regParamsRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegionInput">rfRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2Input">rxDataRate2Input</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1Input">rxDelay1Input</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1Input">rxDrOffset1Input</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2Input">rxFreq2Input</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCntInput">supports32BitFCntInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassBInput">supportsClassBInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassCInput">supportsClassCInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoinInput">supportsJoinInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout">classBTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout">classCTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList">factoryPresetFreqsList</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion">macVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle">maxDutyCycle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp">maxEirp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr">pingSlotDr</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq">pingSlotFreq</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod">pingSlotPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision">regParamsRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion">rfRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2">rxDataRate2</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1">rxDelay1</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1">rxDrOffset1</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2">rxFreq2</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt">supports32BitFCnt</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB">supportsClassB</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC">supportsClassC</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin">supportsJoin</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classBTimeoutInput`<sup>Optional</sup> <a name="classBTimeoutInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeoutInput"></a>

```typescript
public readonly classBTimeoutInput: number;
```

- *Type:* number

---

##### `classCTimeoutInput`<sup>Optional</sup> <a name="classCTimeoutInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeoutInput"></a>

```typescript
public readonly classCTimeoutInput: number;
```

- *Type:* number

---

##### `factoryPresetFreqsListInput`<sup>Optional</sup> <a name="factoryPresetFreqsListInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsListInput"></a>

```typescript
public readonly factoryPresetFreqsListInput: number[];
```

- *Type:* number[]

---

##### `macVersionInput`<sup>Optional</sup> <a name="macVersionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersionInput"></a>

```typescript
public readonly macVersionInput: string;
```

- *Type:* string

---

##### `maxDutyCycleInput`<sup>Optional</sup> <a name="maxDutyCycleInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycleInput"></a>

```typescript
public readonly maxDutyCycleInput: number;
```

- *Type:* number

---

##### `maxEirpInput`<sup>Optional</sup> <a name="maxEirpInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirpInput"></a>

```typescript
public readonly maxEirpInput: number;
```

- *Type:* number

---

##### `pingSlotDrInput`<sup>Optional</sup> <a name="pingSlotDrInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDrInput"></a>

```typescript
public readonly pingSlotDrInput: number;
```

- *Type:* number

---

##### `pingSlotFreqInput`<sup>Optional</sup> <a name="pingSlotFreqInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreqInput"></a>

```typescript
public readonly pingSlotFreqInput: number;
```

- *Type:* number

---

##### `pingSlotPeriodInput`<sup>Optional</sup> <a name="pingSlotPeriodInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriodInput"></a>

```typescript
public readonly pingSlotPeriodInput: number;
```

- *Type:* number

---

##### `regParamsRevisionInput`<sup>Optional</sup> <a name="regParamsRevisionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevisionInput"></a>

```typescript
public readonly regParamsRevisionInput: string;
```

- *Type:* string

---

##### `rfRegionInput`<sup>Optional</sup> <a name="rfRegionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegionInput"></a>

```typescript
public readonly rfRegionInput: string;
```

- *Type:* string

---

##### `rxDataRate2Input`<sup>Optional</sup> <a name="rxDataRate2Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2Input"></a>

```typescript
public readonly rxDataRate2Input: number;
```

- *Type:* number

---

##### `rxDelay1Input`<sup>Optional</sup> <a name="rxDelay1Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1Input"></a>

```typescript
public readonly rxDelay1Input: number;
```

- *Type:* number

---

##### `rxDrOffset1Input`<sup>Optional</sup> <a name="rxDrOffset1Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1Input"></a>

```typescript
public readonly rxDrOffset1Input: number;
```

- *Type:* number

---

##### `rxFreq2Input`<sup>Optional</sup> <a name="rxFreq2Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2Input"></a>

```typescript
public readonly rxFreq2Input: number;
```

- *Type:* number

---

##### `supports32BitFCntInput`<sup>Optional</sup> <a name="supports32BitFCntInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCntInput"></a>

```typescript
public readonly supports32BitFCntInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportsClassBInput`<sup>Optional</sup> <a name="supportsClassBInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassBInput"></a>

```typescript
public readonly supportsClassBInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportsClassCInput`<sup>Optional</sup> <a name="supportsClassCInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassCInput"></a>

```typescript
public readonly supportsClassCInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportsJoinInput`<sup>Optional</sup> <a name="supportsJoinInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoinInput"></a>

```typescript
public readonly supportsJoinInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `classBTimeout`<sup>Required</sup> <a name="classBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout"></a>

```typescript
public readonly classBTimeout: number;
```

- *Type:* number

---

##### `classCTimeout`<sup>Required</sup> <a name="classCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout"></a>

```typescript
public readonly classCTimeout: number;
```

- *Type:* number

---

##### `factoryPresetFreqsList`<sup>Required</sup> <a name="factoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList"></a>

```typescript
public readonly factoryPresetFreqsList: number[];
```

- *Type:* number[]

---

##### `macVersion`<sup>Required</sup> <a name="macVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion"></a>

```typescript
public readonly macVersion: string;
```

- *Type:* string

---

##### `maxDutyCycle`<sup>Required</sup> <a name="maxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle"></a>

```typescript
public readonly maxDutyCycle: number;
```

- *Type:* number

---

##### `maxEirp`<sup>Required</sup> <a name="maxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp"></a>

```typescript
public readonly maxEirp: number;
```

- *Type:* number

---

##### `pingSlotDr`<sup>Required</sup> <a name="pingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr"></a>

```typescript
public readonly pingSlotDr: number;
```

- *Type:* number

---

##### `pingSlotFreq`<sup>Required</sup> <a name="pingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq"></a>

```typescript
public readonly pingSlotFreq: number;
```

- *Type:* number

---

##### `pingSlotPeriod`<sup>Required</sup> <a name="pingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod"></a>

```typescript
public readonly pingSlotPeriod: number;
```

- *Type:* number

---

##### `regParamsRevision`<sup>Required</sup> <a name="regParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision"></a>

```typescript
public readonly regParamsRevision: string;
```

- *Type:* string

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion"></a>

```typescript
public readonly rfRegion: string;
```

- *Type:* string

---

##### `rxDataRate2`<sup>Required</sup> <a name="rxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2"></a>

```typescript
public readonly rxDataRate2: number;
```

- *Type:* number

---

##### `rxDelay1`<sup>Required</sup> <a name="rxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1"></a>

```typescript
public readonly rxDelay1: number;
```

- *Type:* number

---

##### `rxDrOffset1`<sup>Required</sup> <a name="rxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1"></a>

```typescript
public readonly rxDrOffset1: number;
```

- *Type:* number

---

##### `rxFreq2`<sup>Required</sup> <a name="rxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2"></a>

```typescript
public readonly rxFreq2: number;
```

- *Type:* number

---

##### `supports32BitFCnt`<sup>Required</sup> <a name="supports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt"></a>

```typescript
public readonly supports32BitFCnt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportsClassB`<sup>Required</sup> <a name="supportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB"></a>

```typescript
public readonly supportsClassB: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportsClassC`<sup>Required</sup> <a name="supportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC"></a>

```typescript
public readonly supportsClassC: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportsJoin`<sup>Required</sup> <a name="supportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin"></a>

```typescript
public readonly supportsJoin: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessDeviceProfileLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---


### IotwirelessDeviceProfileTagsList <a name="IotwirelessDeviceProfileTagsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

new iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get"></a>

```typescript
public get(index: number): IotwirelessDeviceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessDeviceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]

---


### IotwirelessDeviceProfileTagsOutputReference <a name="IotwirelessDeviceProfileTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessDeviceProfile } from '@cdktn/provider-awscc'

new iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessDeviceProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>

---



