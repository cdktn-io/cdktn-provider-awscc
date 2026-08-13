# `groundstationConfig` Submodule <a name="`groundstationConfig` Submodule" id="@cdktn/provider-awscc.groundstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationConfig <a name="GroundstationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config awscc_groundstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfig(scope: Construct, id: string, config: GroundstationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig">GroundstationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig">GroundstationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData">putConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigData` <a name="putConfigData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData"></a>

```typescript
public putConfigData(value: GroundstationConfigConfigData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags"></a>

```typescript
public putTags(value: IResolvable | GroundstationConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

groundstationConfig.GroundstationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

groundstationConfig.GroundstationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

groundstationConfig.GroundstationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

groundstationConfig.GroundstationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GroundstationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroundstationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroundstationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configData">configData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference">GroundstationConfigConfigDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList">GroundstationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configDataInput">configDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configData`<sup>Required</sup> <a name="configData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configData"></a>

```typescript
public readonly configData: GroundstationConfigConfigDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference">GroundstationConfigConfigDataOutputReference</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tags"></a>

```typescript
public readonly tags: GroundstationConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList">GroundstationConfigTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `configDataInput`<sup>Optional</sup> <a name="configDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configDataInput"></a>

```typescript
public readonly configDataInput: IResolvable | GroundstationConfigConfigData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GroundstationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationConfigConfig <a name="GroundstationConfigConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfig: groundstationConfig.GroundstationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.configData">configData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#name GroundstationConfig#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configData`<sup>Required</sup> <a name="configData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.configData"></a>

```typescript
public readonly configData: GroundstationConfigConfigData;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#name GroundstationConfig#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GroundstationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}.

---

### GroundstationConfigConfigData <a name="GroundstationConfigConfigData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigData: groundstationConfig.GroundstationConfigConfigData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkConfig">antennaDownlinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#antenna_downlink_config GroundstationConfig#antenna_downlink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkDemodDecodeConfig">antennaDownlinkDemodDecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#antenna_downlink_demod_decode_config GroundstationConfig#antenna_downlink_demod_decode_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaUplinkConfig">antennaUplinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#antenna_uplink_config GroundstationConfig#antenna_uplink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.dataflowEndpointConfig">dataflowEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#dataflow_endpoint_config GroundstationConfig#dataflow_endpoint_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.s3RecordingConfig">s3RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#s3_recording_config GroundstationConfig#s3_recording_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.telemetrySinkConfig">telemetrySinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#telemetry_sink_config GroundstationConfig#telemetry_sink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.trackingConfig">trackingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#tracking_config GroundstationConfig#tracking_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.uplinkEchoConfig">uplinkEchoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#uplink_echo_config GroundstationConfig#uplink_echo_config}. |

---

##### `antennaDownlinkConfig`<sup>Optional</sup> <a name="antennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkConfig"></a>

```typescript
public readonly antennaDownlinkConfig: GroundstationConfigConfigDataAntennaDownlinkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#antenna_downlink_config GroundstationConfig#antenna_downlink_config}.

---

##### `antennaDownlinkDemodDecodeConfig`<sup>Optional</sup> <a name="antennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkDemodDecodeConfig"></a>

```typescript
public readonly antennaDownlinkDemodDecodeConfig: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#antenna_downlink_demod_decode_config GroundstationConfig#antenna_downlink_demod_decode_config}.

---

##### `antennaUplinkConfig`<sup>Optional</sup> <a name="antennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaUplinkConfig"></a>

```typescript
public readonly antennaUplinkConfig: GroundstationConfigConfigDataAntennaUplinkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#antenna_uplink_config GroundstationConfig#antenna_uplink_config}.

---

##### `dataflowEndpointConfig`<sup>Optional</sup> <a name="dataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.dataflowEndpointConfig"></a>

```typescript
public readonly dataflowEndpointConfig: GroundstationConfigConfigDataDataflowEndpointConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#dataflow_endpoint_config GroundstationConfig#dataflow_endpoint_config}.

---

##### `s3RecordingConfig`<sup>Optional</sup> <a name="s3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.s3RecordingConfig"></a>

```typescript
public readonly s3RecordingConfig: GroundstationConfigConfigDataS3RecordingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#s3_recording_config GroundstationConfig#s3_recording_config}.

---

##### `telemetrySinkConfig`<sup>Optional</sup> <a name="telemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.telemetrySinkConfig"></a>

```typescript
public readonly telemetrySinkConfig: GroundstationConfigConfigDataTelemetrySinkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#telemetry_sink_config GroundstationConfig#telemetry_sink_config}.

---

##### `trackingConfig`<sup>Optional</sup> <a name="trackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.trackingConfig"></a>

```typescript
public readonly trackingConfig: GroundstationConfigConfigDataTrackingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#tracking_config GroundstationConfig#tracking_config}.

---

##### `uplinkEchoConfig`<sup>Optional</sup> <a name="uplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.uplinkEchoConfig"></a>

```typescript
public readonly uplinkEchoConfig: GroundstationConfigConfigDataUplinkEchoConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#uplink_echo_config GroundstationConfig#uplink_echo_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfig <a name="GroundstationConfigConfigDataAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkConfig: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |

---

##### `spectrumConfig`<sup>Optional</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.property.spectrumConfig"></a>

```typescript
public readonly spectrumConfig: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.polarization">polarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.bandwidth"></a>

```typescript
public readonly bandwidth: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}.

---

##### `centerFrequency`<sup>Optional</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.centerFrequency"></a>

```typescript
public readonly centerFrequency: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `polarization`<sup>Optional</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.units">units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.units">units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.decodeConfig">decodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#decode_config GroundstationConfig#decode_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.demodulationConfig">demodulationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#demodulation_config GroundstationConfig#demodulation_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |

---

##### `decodeConfig`<sup>Optional</sup> <a name="decodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.decodeConfig"></a>

```typescript
public readonly decodeConfig: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#decode_config GroundstationConfig#decode_config}.

---

##### `demodulationConfig`<sup>Optional</sup> <a name="demodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.demodulationConfig"></a>

```typescript
public readonly demodulationConfig: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#demodulation_config GroundstationConfig#demodulation_config}.

---

##### `spectrumConfig`<sup>Optional</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.spectrumConfig"></a>

```typescript
public readonly spectrumConfig: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.property.unvalidatedJson">unvalidatedJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}. |

---

##### `unvalidatedJson`<sup>Optional</sup> <a name="unvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.property.unvalidatedJson"></a>

```typescript
public readonly unvalidatedJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.property.unvalidatedJson">unvalidatedJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}. |

---

##### `unvalidatedJson`<sup>Optional</sup> <a name="unvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.property.unvalidatedJson"></a>

```typescript
public readonly unvalidatedJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.polarization">polarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.bandwidth"></a>

```typescript
public readonly bandwidth: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}.

---

##### `centerFrequency`<sup>Optional</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.centerFrequency"></a>

```typescript
public readonly centerFrequency: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `polarization`<sup>Optional</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.units">units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency: groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.units">units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaUplinkConfig <a name="GroundstationConfigConfigDataAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaUplinkConfig: groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.targetEirp">targetEirp</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#target_eirp GroundstationConfig#target_eirp}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.transmitDisabled">transmitDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#transmit_disabled GroundstationConfig#transmit_disabled}. |

---

##### `spectrumConfig`<sup>Optional</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.spectrumConfig"></a>

```typescript
public readonly spectrumConfig: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

##### `targetEirp`<sup>Optional</sup> <a name="targetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.targetEirp"></a>

```typescript
public readonly targetEirp: GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#target_eirp GroundstationConfig#target_eirp}.

---

##### `transmitDisabled`<sup>Optional</sup> <a name="transmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.transmitDisabled"></a>

```typescript
public readonly transmitDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#transmit_disabled GroundstationConfig#transmit_disabled}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig: groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.polarization">polarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `centerFrequency`<sup>Optional</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.centerFrequency"></a>

```typescript
public readonly centerFrequency: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `polarization`<sup>Optional</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency: groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.units">units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp <a name="GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataAntennaUplinkConfigTargetEirp: groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.units">units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataDataflowEndpointConfig <a name="GroundstationConfigConfigDataDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataDataflowEndpointConfig: groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointName">dataflowEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#dataflow_endpoint_name GroundstationConfig#dataflow_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointRegion">dataflowEndpointRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#dataflow_endpoint_region GroundstationConfig#dataflow_endpoint_region}. |

---

##### `dataflowEndpointName`<sup>Optional</sup> <a name="dataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointName"></a>

```typescript
public readonly dataflowEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#dataflow_endpoint_name GroundstationConfig#dataflow_endpoint_name}.

---

##### `dataflowEndpointRegion`<sup>Optional</sup> <a name="dataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointRegion"></a>

```typescript
public readonly dataflowEndpointRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#dataflow_endpoint_region GroundstationConfig#dataflow_endpoint_region}.

---

### GroundstationConfigConfigDataS3RecordingConfig <a name="GroundstationConfigConfigDataS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataS3RecordingConfig: groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.bucketArn">bucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#bucket_arn GroundstationConfig#bucket_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#prefix GroundstationConfig#prefix}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#role_arn GroundstationConfig#role_arn}. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#bucket_arn GroundstationConfig#bucket_arn}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#prefix GroundstationConfig#prefix}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#role_arn GroundstationConfig#role_arn}.

---

### GroundstationConfigConfigDataTelemetrySinkConfig <a name="GroundstationConfigConfigDataTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataTelemetrySinkConfig: groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkData">telemetrySinkData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#telemetry_sink_data GroundstationConfig#telemetry_sink_data}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkType">telemetrySinkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#telemetry_sink_type GroundstationConfig#telemetry_sink_type}. |

---

##### `telemetrySinkData`<sup>Optional</sup> <a name="telemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkData"></a>

```typescript
public readonly telemetrySinkData: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#telemetry_sink_data GroundstationConfig#telemetry_sink_data}.

---

##### `telemetrySinkType`<sup>Optional</sup> <a name="telemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkType"></a>

```typescript
public readonly telemetrySinkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#telemetry_sink_type GroundstationConfig#telemetry_sink_type}.

---

### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData: groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.property.kinesisDataStreamData">kinesisDataStreamData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#kinesis_data_stream_data GroundstationConfig#kinesis_data_stream_data}. |

---

##### `kinesisDataStreamData`<sup>Optional</sup> <a name="kinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.property.kinesisDataStreamData"></a>

```typescript
public readonly kinesisDataStreamData: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#kinesis_data_stream_data GroundstationConfig#kinesis_data_stream_data}.

---

### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData: groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisDataStreamArn">kinesisDataStreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#kinesis_data_stream_arn GroundstationConfig#kinesis_data_stream_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisRoleArn">kinesisRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#kinesis_role_arn GroundstationConfig#kinesis_role_arn}. |

---

##### `kinesisDataStreamArn`<sup>Optional</sup> <a name="kinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisDataStreamArn"></a>

```typescript
public readonly kinesisDataStreamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#kinesis_data_stream_arn GroundstationConfig#kinesis_data_stream_arn}.

---

##### `kinesisRoleArn`<sup>Optional</sup> <a name="kinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisRoleArn"></a>

```typescript
public readonly kinesisRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#kinesis_role_arn GroundstationConfig#kinesis_role_arn}.

---

### GroundstationConfigConfigDataTrackingConfig <a name="GroundstationConfigConfigDataTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataTrackingConfig: groundstationConfig.GroundstationConfigConfigDataTrackingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.property.autotrack">autotrack</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#autotrack GroundstationConfig#autotrack}. |

---

##### `autotrack`<sup>Optional</sup> <a name="autotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.property.autotrack"></a>

```typescript
public readonly autotrack: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#autotrack GroundstationConfig#autotrack}.

---

### GroundstationConfigConfigDataUplinkEchoConfig <a name="GroundstationConfigConfigDataUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigConfigDataUplinkEchoConfig: groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.antennaUplinkConfigArn">antennaUplinkConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#antenna_uplink_config_arn GroundstationConfig#antenna_uplink_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#enabled GroundstationConfig#enabled}. |

---

##### `antennaUplinkConfigArn`<sup>Optional</sup> <a name="antennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.antennaUplinkConfigArn"></a>

```typescript
public readonly antennaUplinkConfigArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#antenna_uplink_config_arn GroundstationConfig#antenna_uplink_config_arn}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#enabled GroundstationConfig#enabled}.

---

### GroundstationConfigTags <a name="GroundstationConfigTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

const groundstationConfigTags: groundstationConfig.GroundstationConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#key GroundstationConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#key GroundstationConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig">putSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resetSpectrumConfig">resetSpectrumConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpectrumConfig` <a name="putSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig"></a>

```typescript
public putSpectrumConfig(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---

##### `resetSpectrumConfig` <a name="resetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resetSpectrumConfig"></a>

```typescript
public resetSpectrumConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfigInput">spectrumConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spectrumConfig`<sup>Required</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig"></a>

```typescript
public readonly spectrumConfig: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a>

---

##### `spectrumConfigInput`<sup>Optional</sup> <a name="spectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfigInput"></a>

```typescript
public readonly spectrumConfigInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth">putBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency">putCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetCenterFrequency">resetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetPolarization">resetPolarization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBandwidth` <a name="putBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth"></a>

```typescript
public putBandwidth(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---

##### `putCenterFrequency` <a name="putCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```typescript
public putCenterFrequency(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetBandwidth"></a>

```typescript
public resetBandwidth(): void
```

##### `resetCenterFrequency` <a name="resetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```typescript
public resetCenterFrequency(): void
```

##### `resetPolarization` <a name="resetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetPolarization"></a>

```typescript
public resetPolarization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidthInput">bandwidthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput">centerFrequencyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarizationInput">polarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization">polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```typescript
public readonly bandwidth: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `centerFrequency`<sup>Required</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```typescript
public readonly centerFrequency: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---

##### `centerFrequencyInput`<sup>Optional</sup> <a name="centerFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```typescript
public readonly centerFrequencyInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---

##### `polarizationInput`<sup>Optional</sup> <a name="polarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```typescript
public readonly polarizationInput: string;
```

- *Type:* string

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resetUnvalidatedJson">resetUnvalidatedJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnvalidatedJson` <a name="resetUnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resetUnvalidatedJson"></a>

```typescript
public resetUnvalidatedJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJsonInput">unvalidatedJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson">unvalidatedJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unvalidatedJsonInput`<sup>Optional</sup> <a name="unvalidatedJsonInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJsonInput"></a>

```typescript
public readonly unvalidatedJsonInput: string;
```

- *Type:* string

---

##### `unvalidatedJson`<sup>Required</sup> <a name="unvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson"></a>

```typescript
public readonly unvalidatedJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resetUnvalidatedJson">resetUnvalidatedJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnvalidatedJson` <a name="resetUnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resetUnvalidatedJson"></a>

```typescript
public resetUnvalidatedJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJsonInput">unvalidatedJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson">unvalidatedJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unvalidatedJsonInput`<sup>Optional</sup> <a name="unvalidatedJsonInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJsonInput"></a>

```typescript
public readonly unvalidatedJsonInput: string;
```

- *Type:* string

---

##### `unvalidatedJson`<sup>Required</sup> <a name="unvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson"></a>

```typescript
public readonly unvalidatedJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig">putDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig">putDemodulationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig">putSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDecodeConfig">resetDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDemodulationConfig">resetDemodulationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetSpectrumConfig">resetSpectrumConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDecodeConfig` <a name="putDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig"></a>

```typescript
public putDecodeConfig(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---

##### `putDemodulationConfig` <a name="putDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig"></a>

```typescript
public putDemodulationConfig(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---

##### `putSpectrumConfig` <a name="putSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig"></a>

```typescript
public putSpectrumConfig(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---

##### `resetDecodeConfig` <a name="resetDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDecodeConfig"></a>

```typescript
public resetDecodeConfig(): void
```

##### `resetDemodulationConfig` <a name="resetDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDemodulationConfig"></a>

```typescript
public resetDemodulationConfig(): void
```

##### `resetSpectrumConfig` <a name="resetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetSpectrumConfig"></a>

```typescript
public resetSpectrumConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig">decodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig">demodulationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfigInput">decodeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfigInput">demodulationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfigInput">spectrumConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `decodeConfig`<sup>Required</sup> <a name="decodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig"></a>

```typescript
public readonly decodeConfig: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a>

---

##### `demodulationConfig`<sup>Required</sup> <a name="demodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig"></a>

```typescript
public readonly demodulationConfig: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a>

---

##### `spectrumConfig`<sup>Required</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig"></a>

```typescript
public readonly spectrumConfig: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a>

---

##### `decodeConfigInput`<sup>Optional</sup> <a name="decodeConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfigInput"></a>

```typescript
public readonly decodeConfigInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---

##### `demodulationConfigInput`<sup>Optional</sup> <a name="demodulationConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfigInput"></a>

```typescript
public readonly demodulationConfigInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---

##### `spectrumConfigInput`<sup>Optional</sup> <a name="spectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfigInput"></a>

```typescript
public readonly spectrumConfigInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth">putBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency">putCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetCenterFrequency">resetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetPolarization">resetPolarization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBandwidth` <a name="putBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth"></a>

```typescript
public putBandwidth(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---

##### `putCenterFrequency` <a name="putCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```typescript
public putCenterFrequency(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetBandwidth"></a>

```typescript
public resetBandwidth(): void
```

##### `resetCenterFrequency` <a name="resetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```typescript
public resetCenterFrequency(): void
```

##### `resetPolarization` <a name="resetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetPolarization"></a>

```typescript
public resetPolarization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidthInput">bandwidthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequencyInput">centerFrequencyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarizationInput">polarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization">polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```typescript
public readonly bandwidth: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `centerFrequency`<sup>Required</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```typescript
public readonly centerFrequency: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---

##### `centerFrequencyInput`<sup>Optional</sup> <a name="centerFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```typescript
public readonly centerFrequencyInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---

##### `polarizationInput`<sup>Optional</sup> <a name="polarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```typescript
public readonly polarizationInput: string;
```

- *Type:* string

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---


### GroundstationConfigConfigDataAntennaUplinkConfigOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig">putSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp">putTargetEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetSpectrumConfig">resetSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTargetEirp">resetTargetEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTransmitDisabled">resetTransmitDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpectrumConfig` <a name="putSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig"></a>

```typescript
public putSpectrumConfig(value: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---

##### `putTargetEirp` <a name="putTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp"></a>

```typescript
public putTargetEirp(value: GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---

##### `resetSpectrumConfig` <a name="resetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetSpectrumConfig"></a>

```typescript
public resetSpectrumConfig(): void
```

##### `resetTargetEirp` <a name="resetTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTargetEirp"></a>

```typescript
public resetTargetEirp(): void
```

##### `resetTransmitDisabled` <a name="resetTransmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTransmitDisabled"></a>

```typescript
public resetTransmitDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp">targetEirp</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfigInput">spectrumConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirpInput">targetEirpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabledInput">transmitDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled">transmitDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spectrumConfig`<sup>Required</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig"></a>

```typescript
public readonly spectrumConfig: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a>

---

##### `targetEirp`<sup>Required</sup> <a name="targetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp"></a>

```typescript
public readonly targetEirp: GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a>

---

##### `spectrumConfigInput`<sup>Optional</sup> <a name="spectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfigInput"></a>

```typescript
public readonly spectrumConfigInput: IResolvable | GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---

##### `targetEirpInput`<sup>Optional</sup> <a name="targetEirpInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirpInput"></a>

```typescript
public readonly targetEirpInput: IResolvable | GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---

##### `transmitDisabledInput`<sup>Optional</sup> <a name="transmitDisabledInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabledInput"></a>

```typescript
public readonly transmitDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transmitDisabled`<sup>Required</sup> <a name="transmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled"></a>

```typescript
public readonly transmitDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaUplinkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

---


### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---


### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency">putCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetCenterFrequency">resetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetPolarization">resetPolarization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCenterFrequency` <a name="putCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```typescript
public putCenterFrequency(value: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---

##### `resetCenterFrequency` <a name="resetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```typescript
public resetCenterFrequency(): void
```

##### `resetPolarization` <a name="resetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetPolarization"></a>

```typescript
public resetPolarization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput">centerFrequencyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarizationInput">polarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization">polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `centerFrequency`<sup>Required</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```typescript
public readonly centerFrequency: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `centerFrequencyInput`<sup>Optional</sup> <a name="centerFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```typescript
public readonly centerFrequencyInput: IResolvable | GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---

##### `polarizationInput`<sup>Optional</sup> <a name="polarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```typescript
public readonly polarizationInput: string;
```

- *Type:* string

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---


### GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---


### GroundstationConfigConfigDataDataflowEndpointConfigOutputReference <a name="GroundstationConfigConfigDataDataflowEndpointConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointName">resetDataflowEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointRegion">resetDataflowEndpointRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataflowEndpointName` <a name="resetDataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointName"></a>

```typescript
public resetDataflowEndpointName(): void
```

##### `resetDataflowEndpointRegion` <a name="resetDataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointRegion"></a>

```typescript
public resetDataflowEndpointRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointNameInput">dataflowEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegionInput">dataflowEndpointRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName">dataflowEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion">dataflowEndpointRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataflowEndpointNameInput`<sup>Optional</sup> <a name="dataflowEndpointNameInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointNameInput"></a>

```typescript
public readonly dataflowEndpointNameInput: string;
```

- *Type:* string

---

##### `dataflowEndpointRegionInput`<sup>Optional</sup> <a name="dataflowEndpointRegionInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegionInput"></a>

```typescript
public readonly dataflowEndpointRegionInput: string;
```

- *Type:* string

---

##### `dataflowEndpointName`<sup>Required</sup> <a name="dataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName"></a>

```typescript
public readonly dataflowEndpointName: string;
```

- *Type:* string

---

##### `dataflowEndpointRegion`<sup>Required</sup> <a name="dataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion"></a>

```typescript
public readonly dataflowEndpointRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataDataflowEndpointConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

---


### GroundstationConfigConfigDataOutputReference <a name="GroundstationConfigConfigDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig">putAntennaDownlinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig">putAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig">putAntennaUplinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig">putDataflowEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig">putS3RecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig">putTelemetrySinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig">putTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig">putUplinkEchoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkConfig">resetAntennaDownlinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkDemodDecodeConfig">resetAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaUplinkConfig">resetAntennaUplinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetDataflowEndpointConfig">resetDataflowEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetS3RecordingConfig">resetS3RecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTelemetrySinkConfig">resetTelemetrySinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTrackingConfig">resetTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetUplinkEchoConfig">resetUplinkEchoConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAntennaDownlinkConfig` <a name="putAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig"></a>

```typescript
public putAntennaDownlinkConfig(value: GroundstationConfigConfigDataAntennaDownlinkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

---

##### `putAntennaDownlinkDemodDecodeConfig` <a name="putAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig"></a>

```typescript
public putAntennaDownlinkDemodDecodeConfig(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---

##### `putAntennaUplinkConfig` <a name="putAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig"></a>

```typescript
public putAntennaUplinkConfig(value: GroundstationConfigConfigDataAntennaUplinkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

---

##### `putDataflowEndpointConfig` <a name="putDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig"></a>

```typescript
public putDataflowEndpointConfig(value: GroundstationConfigConfigDataDataflowEndpointConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

---

##### `putS3RecordingConfig` <a name="putS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig"></a>

```typescript
public putS3RecordingConfig(value: GroundstationConfigConfigDataS3RecordingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

---

##### `putTelemetrySinkConfig` <a name="putTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig"></a>

```typescript
public putTelemetrySinkConfig(value: GroundstationConfigConfigDataTelemetrySinkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

---

##### `putTrackingConfig` <a name="putTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig"></a>

```typescript
public putTrackingConfig(value: GroundstationConfigConfigDataTrackingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

---

##### `putUplinkEchoConfig` <a name="putUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig"></a>

```typescript
public putUplinkEchoConfig(value: GroundstationConfigConfigDataUplinkEchoConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

---

##### `resetAntennaDownlinkConfig` <a name="resetAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkConfig"></a>

```typescript
public resetAntennaDownlinkConfig(): void
```

##### `resetAntennaDownlinkDemodDecodeConfig` <a name="resetAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkDemodDecodeConfig"></a>

```typescript
public resetAntennaDownlinkDemodDecodeConfig(): void
```

##### `resetAntennaUplinkConfig` <a name="resetAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaUplinkConfig"></a>

```typescript
public resetAntennaUplinkConfig(): void
```

##### `resetDataflowEndpointConfig` <a name="resetDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetDataflowEndpointConfig"></a>

```typescript
public resetDataflowEndpointConfig(): void
```

##### `resetS3RecordingConfig` <a name="resetS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetS3RecordingConfig"></a>

```typescript
public resetS3RecordingConfig(): void
```

##### `resetTelemetrySinkConfig` <a name="resetTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTelemetrySinkConfig"></a>

```typescript
public resetTelemetrySinkConfig(): void
```

##### `resetTrackingConfig` <a name="resetTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTrackingConfig"></a>

```typescript
public resetTrackingConfig(): void
```

##### `resetUplinkEchoConfig` <a name="resetUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetUplinkEchoConfig"></a>

```typescript
public resetUplinkEchoConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig">antennaDownlinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig">antennaDownlinkDemodDecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig">antennaUplinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig">dataflowEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference">GroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfig">s3RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference">GroundstationConfigConfigDataS3RecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig">telemetrySinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfig">trackingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference">GroundstationConfigConfigDataTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig">uplinkEchoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference">GroundstationConfigConfigDataUplinkEchoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfigInput">antennaDownlinkConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfigInput">antennaDownlinkDemodDecodeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfigInput">antennaUplinkConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfigInput">dataflowEndpointConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfigInput">s3RecordingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfigInput">telemetrySinkConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfigInput">trackingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfigInput">uplinkEchoConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `antennaDownlinkConfig`<sup>Required</sup> <a name="antennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig"></a>

```typescript
public readonly antennaDownlinkConfig: GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a>

---

##### `antennaDownlinkDemodDecodeConfig`<sup>Required</sup> <a name="antennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig"></a>

```typescript
public readonly antennaDownlinkDemodDecodeConfig: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a>

---

##### `antennaUplinkConfig`<sup>Required</sup> <a name="antennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig"></a>

```typescript
public readonly antennaUplinkConfig: GroundstationConfigConfigDataAntennaUplinkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a>

---

##### `dataflowEndpointConfig`<sup>Required</sup> <a name="dataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig"></a>

```typescript
public readonly dataflowEndpointConfig: GroundstationConfigConfigDataDataflowEndpointConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference">GroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a>

---

##### `s3RecordingConfig`<sup>Required</sup> <a name="s3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfig"></a>

```typescript
public readonly s3RecordingConfig: GroundstationConfigConfigDataS3RecordingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference">GroundstationConfigConfigDataS3RecordingConfigOutputReference</a>

---

##### `telemetrySinkConfig`<sup>Required</sup> <a name="telemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig"></a>

```typescript
public readonly telemetrySinkConfig: GroundstationConfigConfigDataTelemetrySinkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a>

---

##### `trackingConfig`<sup>Required</sup> <a name="trackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfig"></a>

```typescript
public readonly trackingConfig: GroundstationConfigConfigDataTrackingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference">GroundstationConfigConfigDataTrackingConfigOutputReference</a>

---

##### `uplinkEchoConfig`<sup>Required</sup> <a name="uplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig"></a>

```typescript
public readonly uplinkEchoConfig: GroundstationConfigConfigDataUplinkEchoConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference">GroundstationConfigConfigDataUplinkEchoConfigOutputReference</a>

---

##### `antennaDownlinkConfigInput`<sup>Optional</sup> <a name="antennaDownlinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfigInput"></a>

```typescript
public readonly antennaDownlinkConfigInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

---

##### `antennaDownlinkDemodDecodeConfigInput`<sup>Optional</sup> <a name="antennaDownlinkDemodDecodeConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfigInput"></a>

```typescript
public readonly antennaDownlinkDemodDecodeConfigInput: IResolvable | GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---

##### `antennaUplinkConfigInput`<sup>Optional</sup> <a name="antennaUplinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfigInput"></a>

```typescript
public readonly antennaUplinkConfigInput: IResolvable | GroundstationConfigConfigDataAntennaUplinkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

---

##### `dataflowEndpointConfigInput`<sup>Optional</sup> <a name="dataflowEndpointConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfigInput"></a>

```typescript
public readonly dataflowEndpointConfigInput: IResolvable | GroundstationConfigConfigDataDataflowEndpointConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

---

##### `s3RecordingConfigInput`<sup>Optional</sup> <a name="s3RecordingConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfigInput"></a>

```typescript
public readonly s3RecordingConfigInput: IResolvable | GroundstationConfigConfigDataS3RecordingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

---

##### `telemetrySinkConfigInput`<sup>Optional</sup> <a name="telemetrySinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfigInput"></a>

```typescript
public readonly telemetrySinkConfigInput: IResolvable | GroundstationConfigConfigDataTelemetrySinkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

---

##### `trackingConfigInput`<sup>Optional</sup> <a name="trackingConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfigInput"></a>

```typescript
public readonly trackingConfigInput: IResolvable | GroundstationConfigConfigDataTrackingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

---

##### `uplinkEchoConfigInput`<sup>Optional</sup> <a name="uplinkEchoConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfigInput"></a>

```typescript
public readonly uplinkEchoConfigInput: IResolvable | GroundstationConfigConfigDataUplinkEchoConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

---


### GroundstationConfigConfigDataS3RecordingConfigOutputReference <a name="GroundstationConfigConfigDataS3RecordingConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataS3RecordingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

---


### GroundstationConfigConfigDataTelemetrySinkConfigOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData">putTelemetrySinkData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkData">resetTelemetrySinkData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkType">resetTelemetrySinkType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetrySinkData` <a name="putTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData"></a>

```typescript
public putTelemetrySinkData(value: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---

##### `resetTelemetrySinkData` <a name="resetTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkData"></a>

```typescript
public resetTelemetrySinkData(): void
```

##### `resetTelemetrySinkType` <a name="resetTelemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkType"></a>

```typescript
public resetTelemetrySinkType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData">telemetrySinkData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkDataInput">telemetrySinkDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkTypeInput">telemetrySinkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType">telemetrySinkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `telemetrySinkData`<sup>Required</sup> <a name="telemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData"></a>

```typescript
public readonly telemetrySinkData: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a>

---

##### `telemetrySinkDataInput`<sup>Optional</sup> <a name="telemetrySinkDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkDataInput"></a>

```typescript
public readonly telemetrySinkDataInput: IResolvable | GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---

##### `telemetrySinkTypeInput`<sup>Optional</sup> <a name="telemetrySinkTypeInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkTypeInput"></a>

```typescript
public readonly telemetrySinkTypeInput: string;
```

- *Type:* string

---

##### `telemetrySinkType`<sup>Required</sup> <a name="telemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType"></a>

```typescript
public readonly telemetrySinkType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataTelemetrySinkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

---


### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisDataStreamArn">resetKinesisDataStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisRoleArn">resetKinesisRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKinesisDataStreamArn` <a name="resetKinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisDataStreamArn"></a>

```typescript
public resetKinesisDataStreamArn(): void
```

##### `resetKinesisRoleArn` <a name="resetKinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisRoleArn"></a>

```typescript
public resetKinesisRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArnInput">kinesisDataStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArnInput">kinesisRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn">kinesisDataStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn">kinesisRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisDataStreamArnInput`<sup>Optional</sup> <a name="kinesisDataStreamArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArnInput"></a>

```typescript
public readonly kinesisDataStreamArnInput: string;
```

- *Type:* string

---

##### `kinesisRoleArnInput`<sup>Optional</sup> <a name="kinesisRoleArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArnInput"></a>

```typescript
public readonly kinesisRoleArnInput: string;
```

- *Type:* string

---

##### `kinesisDataStreamArn`<sup>Required</sup> <a name="kinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn"></a>

```typescript
public readonly kinesisDataStreamArn: string;
```

- *Type:* string

---

##### `kinesisRoleArn`<sup>Required</sup> <a name="kinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn"></a>

```typescript
public readonly kinesisRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---


### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData">putKinesisDataStreamData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resetKinesisDataStreamData">resetKinesisDataStreamData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisDataStreamData` <a name="putKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData"></a>

```typescript
public putKinesisDataStreamData(value: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---

##### `resetKinesisDataStreamData` <a name="resetKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resetKinesisDataStreamData"></a>

```typescript
public resetKinesisDataStreamData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData">kinesisDataStreamData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamDataInput">kinesisDataStreamDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisDataStreamData`<sup>Required</sup> <a name="kinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData"></a>

```typescript
public readonly kinesisDataStreamData: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a>

---

##### `kinesisDataStreamDataInput`<sup>Optional</sup> <a name="kinesisDataStreamDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamDataInput"></a>

```typescript
public readonly kinesisDataStreamDataInput: IResolvable | GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---


### GroundstationConfigConfigDataTrackingConfigOutputReference <a name="GroundstationConfigConfigDataTrackingConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resetAutotrack">resetAutotrack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutotrack` <a name="resetAutotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resetAutotrack"></a>

```typescript
public resetAutotrack(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrackInput">autotrackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack">autotrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autotrackInput`<sup>Optional</sup> <a name="autotrackInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrackInput"></a>

```typescript
public readonly autotrackInput: string;
```

- *Type:* string

---

##### `autotrack`<sup>Required</sup> <a name="autotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack"></a>

```typescript
public readonly autotrack: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataTrackingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

---


### GroundstationConfigConfigDataUplinkEchoConfigOutputReference <a name="GroundstationConfigConfigDataUplinkEchoConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetAntennaUplinkConfigArn">resetAntennaUplinkConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAntennaUplinkConfigArn` <a name="resetAntennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetAntennaUplinkConfigArn"></a>

```typescript
public resetAntennaUplinkConfigArn(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArnInput">antennaUplinkConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn">antennaUplinkConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `antennaUplinkConfigArnInput`<sup>Optional</sup> <a name="antennaUplinkConfigArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArnInput"></a>

```typescript
public readonly antennaUplinkConfigArnInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `antennaUplinkConfigArn`<sup>Required</sup> <a name="antennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn"></a>

```typescript
public readonly antennaUplinkConfigArn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigConfigDataUplinkEchoConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

---


### GroundstationConfigTagsList <a name="GroundstationConfigTagsList" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get"></a>

```typescript
public get(index: number): GroundstationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>[]

---


### GroundstationConfigTagsOutputReference <a name="GroundstationConfigTagsOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer"></a>

```typescript
import { groundstationConfig } from '@cdktn/provider-awscc'

new groundstationConfig.GroundstationConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationConfigTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>

---



