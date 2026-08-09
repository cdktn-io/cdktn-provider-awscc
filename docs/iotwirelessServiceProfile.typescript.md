# `iotwirelessServiceProfile` Submodule <a name="`iotwirelessServiceProfile` Submodule" id="@cdktn/provider-awscc.iotwirelessServiceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessServiceProfile <a name="IotwirelessServiceProfile" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile awscc_iotwireless_service_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

new iotwirelessServiceProfile.IotwirelessServiceProfile(scope: Construct, id: string, config?: IotwirelessServiceProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig">IotwirelessServiceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig">IotwirelessServiceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetLoRaWan">resetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putLoRaWan"></a>

```typescript
public putLoRaWan(value: IotwirelessServiceProfileLoRaWan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessServiceProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>[]

---

##### `resetLoRaWan` <a name="resetLoRaWan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetLoRaWan"></a>

```typescript
public resetLoRaWan(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessServiceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isConstruct"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

iotwirelessServiceProfile.IotwirelessServiceProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformElement"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformResource"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessServiceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessServiceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessServiceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessServiceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference">IotwirelessServiceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.serviceProfileId">serviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList">IotwirelessServiceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.loRaWanInput">loRaWanInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessServiceProfileLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference">IotwirelessServiceProfileLoRaWanOutputReference</a>

---

##### `serviceProfileId`<sup>Required</sup> <a name="serviceProfileId" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.serviceProfileId"></a>

```typescript
public readonly serviceProfileId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tags"></a>

```typescript
public readonly tags: IotwirelessServiceProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList">IotwirelessServiceProfileTagsList</a>

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.loRaWanInput"></a>

```typescript
public readonly loRaWanInput: IResolvable | IotwirelessServiceProfileLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessServiceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessServiceProfileConfig <a name="IotwirelessServiceProfileConfig" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.Initializer"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

const iotwirelessServiceProfileConfig: iotwirelessServiceProfile.IotwirelessServiceProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a></code> | LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.name">name</a></code> | <code>string</code> | Name of service profile. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>[]</code> | A list of key-value pairs that contain metadata for the service profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessServiceProfileLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a>

LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#lo_ra_wan IotwirelessServiceProfile#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#name IotwirelessServiceProfile#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessServiceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>[]

A list of key-value pairs that contain metadata for the service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#tags IotwirelessServiceProfile#tags}

---

### IotwirelessServiceProfileLoRaWan <a name="IotwirelessServiceProfileLoRaWan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.Initializer"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

const iotwirelessServiceProfileLoRaWan: iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.addGwMetadata">addGwMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#add_gw_metadata IotwirelessServiceProfile#add_gw_metadata}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.prAllowed">prAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#pr_allowed IotwirelessServiceProfile#pr_allowed}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.raAllowed">raAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#ra_allowed IotwirelessServiceProfile#ra_allowed}. |

---

##### `addGwMetadata`<sup>Optional</sup> <a name="addGwMetadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.addGwMetadata"></a>

```typescript
public readonly addGwMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#add_gw_metadata IotwirelessServiceProfile#add_gw_metadata}.

---

##### `prAllowed`<sup>Optional</sup> <a name="prAllowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.prAllowed"></a>

```typescript
public readonly prAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#pr_allowed IotwirelessServiceProfile#pr_allowed}.

---

##### `raAllowed`<sup>Optional</sup> <a name="raAllowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.raAllowed"></a>

```typescript
public readonly raAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#ra_allowed IotwirelessServiceProfile#ra_allowed}.

---

### IotwirelessServiceProfileTags <a name="IotwirelessServiceProfileTags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.Initializer"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

const iotwirelessServiceProfileTags: iotwirelessServiceProfile.IotwirelessServiceProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#key IotwirelessServiceProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#value IotwirelessServiceProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#key IotwirelessServiceProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_service_profile#value IotwirelessServiceProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessServiceProfileLoRaWanOutputReference <a name="IotwirelessServiceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

new iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetAddGwMetadata">resetAddGwMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetPrAllowed">resetPrAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetRaAllowed">resetRaAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddGwMetadata` <a name="resetAddGwMetadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetAddGwMetadata"></a>

```typescript
public resetAddGwMetadata(): void
```

##### `resetPrAllowed` <a name="resetPrAllowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetPrAllowed"></a>

```typescript
public resetPrAllowed(): void
```

##### `resetRaAllowed` <a name="resetRaAllowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetRaAllowed"></a>

```typescript
public resetRaAllowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.channelMask">channelMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq">devStatusReqFreq</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize">dlBucketSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlRate">dlRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy">dlRatePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.drMax">drMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.drMin">drMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed">hrAllowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity">minGwDiversity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc">nwkGeoLoc</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery">reportDevStatusBattery</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin">reportDevStatusMargin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.targetPer">targetPer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize">ulBucketSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulRate">ulRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy">ulRatePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadataInput">addGwMetadataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.prAllowedInput">prAllowedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.raAllowedInput">raAllowedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata">addGwMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed">prAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed">raAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelMask`<sup>Required</sup> <a name="channelMask" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.channelMask"></a>

```typescript
public readonly channelMask: string;
```

- *Type:* string

---

##### `devStatusReqFreq`<sup>Required</sup> <a name="devStatusReqFreq" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq"></a>

```typescript
public readonly devStatusReqFreq: number;
```

- *Type:* number

---

##### `dlBucketSize`<sup>Required</sup> <a name="dlBucketSize" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize"></a>

```typescript
public readonly dlBucketSize: number;
```

- *Type:* number

---

##### `dlRate`<sup>Required</sup> <a name="dlRate" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlRate"></a>

```typescript
public readonly dlRate: number;
```

- *Type:* number

---

##### `dlRatePolicy`<sup>Required</sup> <a name="dlRatePolicy" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy"></a>

```typescript
public readonly dlRatePolicy: string;
```

- *Type:* string

---

##### `drMax`<sup>Required</sup> <a name="drMax" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.drMax"></a>

```typescript
public readonly drMax: number;
```

- *Type:* number

---

##### `drMin`<sup>Required</sup> <a name="drMin" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.drMin"></a>

```typescript
public readonly drMin: number;
```

- *Type:* number

---

##### `hrAllowed`<sup>Required</sup> <a name="hrAllowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed"></a>

```typescript
public readonly hrAllowed: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `minGwDiversity`<sup>Required</sup> <a name="minGwDiversity" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity"></a>

```typescript
public readonly minGwDiversity: number;
```

- *Type:* number

---

##### `nwkGeoLoc`<sup>Required</sup> <a name="nwkGeoLoc" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc"></a>

```typescript
public readonly nwkGeoLoc: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `reportDevStatusBattery`<sup>Required</sup> <a name="reportDevStatusBattery" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery"></a>

```typescript
public readonly reportDevStatusBattery: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `reportDevStatusMargin`<sup>Required</sup> <a name="reportDevStatusMargin" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin"></a>

```typescript
public readonly reportDevStatusMargin: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `targetPer`<sup>Required</sup> <a name="targetPer" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.targetPer"></a>

```typescript
public readonly targetPer: number;
```

- *Type:* number

---

##### `ulBucketSize`<sup>Required</sup> <a name="ulBucketSize" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize"></a>

```typescript
public readonly ulBucketSize: number;
```

- *Type:* number

---

##### `ulRate`<sup>Required</sup> <a name="ulRate" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulRate"></a>

```typescript
public readonly ulRate: number;
```

- *Type:* number

---

##### `ulRatePolicy`<sup>Required</sup> <a name="ulRatePolicy" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy"></a>

```typescript
public readonly ulRatePolicy: string;
```

- *Type:* string

---

##### `addGwMetadataInput`<sup>Optional</sup> <a name="addGwMetadataInput" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadataInput"></a>

```typescript
public readonly addGwMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prAllowedInput`<sup>Optional</sup> <a name="prAllowedInput" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.prAllowedInput"></a>

```typescript
public readonly prAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `raAllowedInput`<sup>Optional</sup> <a name="raAllowedInput" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.raAllowedInput"></a>

```typescript
public readonly raAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `addGwMetadata`<sup>Required</sup> <a name="addGwMetadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata"></a>

```typescript
public readonly addGwMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prAllowed`<sup>Required</sup> <a name="prAllowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed"></a>

```typescript
public readonly prAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `raAllowed`<sup>Required</sup> <a name="raAllowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed"></a>

```typescript
public readonly raAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessServiceProfileLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a>

---


### IotwirelessServiceProfileTagsList <a name="IotwirelessServiceProfileTagsList" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

new iotwirelessServiceProfile.IotwirelessServiceProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.get"></a>

```typescript
public get(index: number): IotwirelessServiceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessServiceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>[]

---


### IotwirelessServiceProfileTagsOutputReference <a name="IotwirelessServiceProfileTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessServiceProfile } from '@cdktn/provider-awscc'

new iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessServiceProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>

---



