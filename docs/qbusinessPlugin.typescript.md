# `qbusinessPlugin` Submodule <a name="`qbusinessPlugin` Submodule" id="@cdktn/provider-awscc.qbusinessPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessPlugin <a name="QbusinessPlugin" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin awscc_qbusiness_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPlugin(scope: Construct, id: string, config: QbusinessPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig">QbusinessPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig">QbusinessPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration">putAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration">putCustomPluginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetCustomPluginConfiguration">resetCustomPluginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetServerUrl">resetServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfiguration` <a name="putAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration"></a>

```typescript
public putAuthConfiguration(value: QbusinessPluginAuthConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

---

##### `putCustomPluginConfiguration` <a name="putCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration"></a>

```typescript
public putCustomPluginConfiguration(value: QbusinessPluginCustomPluginConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags"></a>

```typescript
public putTags(value: IResolvable | QbusinessPluginTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>[]

---

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetCustomPluginConfiguration` <a name="resetCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetCustomPluginConfiguration"></a>

```typescript
public resetCustomPluginConfiguration(): void
```

##### `resetServerUrl` <a name="resetServerUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetServerUrl"></a>

```typescript
public resetServerUrl(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

qbusinessPlugin.QbusinessPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

qbusinessPlugin.QbusinessPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

qbusinessPlugin.QbusinessPlugin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

qbusinessPlugin.QbusinessPlugin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QbusinessPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QbusinessPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QbusinessPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfiguration">authConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.buildStatus">buildStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfiguration">customPluginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference">QbusinessPluginCustomPluginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginArn">pluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList">QbusinessPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfigurationInput">authConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfigurationInput">customPluginConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrlInput">serverUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrl">serverUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authConfiguration`<sup>Required</sup> <a name="authConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfiguration"></a>

```typescript
public readonly authConfiguration: QbusinessPluginAuthConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationOutputReference</a>

---

##### `buildStatus`<sup>Required</sup> <a name="buildStatus" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.buildStatus"></a>

```typescript
public readonly buildStatus: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customPluginConfiguration`<sup>Required</sup> <a name="customPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfiguration"></a>

```typescript
public readonly customPluginConfiguration: QbusinessPluginCustomPluginConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference">QbusinessPluginCustomPluginConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pluginArn`<sup>Required</sup> <a name="pluginArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginArn"></a>

```typescript
public readonly pluginArn: string;
```

- *Type:* string

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tags"></a>

```typescript
public readonly tags: QbusinessPluginTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList">QbusinessPluginTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `authConfigurationInput`<sup>Optional</sup> <a name="authConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfigurationInput"></a>

```typescript
public readonly authConfigurationInput: IResolvable | QbusinessPluginAuthConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

---

##### `customPluginConfigurationInput`<sup>Optional</sup> <a name="customPluginConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfigurationInput"></a>

```typescript
public readonly customPluginConfigurationInput: IResolvable | QbusinessPluginCustomPluginConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `serverUrlInput`<sup>Optional</sup> <a name="serverUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrlInput"></a>

```typescript
public readonly serverUrlInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QbusinessPluginTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessPluginAuthConfiguration <a name="QbusinessPluginAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

const qbusinessPluginAuthConfiguration: qbusinessPlugin.QbusinessPluginAuthConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.basicAuthConfiguration">basicAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#basic_auth_configuration QbusinessPlugin#basic_auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.noAuthConfiguration">noAuthConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#no_auth_configuration QbusinessPlugin#no_auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.oAuth2ClientCredentialConfiguration">oAuth2ClientCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#o_auth_2_client_credential_configuration QbusinessPlugin#o_auth_2_client_credential_configuration}. |

---

##### `basicAuthConfiguration`<sup>Optional</sup> <a name="basicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.basicAuthConfiguration"></a>

```typescript
public readonly basicAuthConfiguration: QbusinessPluginAuthConfigurationBasicAuthConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#basic_auth_configuration QbusinessPlugin#basic_auth_configuration}.

---

##### `noAuthConfiguration`<sup>Optional</sup> <a name="noAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.noAuthConfiguration"></a>

```typescript
public readonly noAuthConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#no_auth_configuration QbusinessPlugin#no_auth_configuration}.

---

##### `oAuth2ClientCredentialConfiguration`<sup>Optional</sup> <a name="oAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.oAuth2ClientCredentialConfiguration"></a>

```typescript
public readonly oAuth2ClientCredentialConfiguration: QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#o_auth_2_client_credential_configuration QbusinessPlugin#o_auth_2_client_credential_configuration}.

---

### QbusinessPluginAuthConfigurationBasicAuthConfiguration <a name="QbusinessPluginAuthConfigurationBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

const qbusinessPluginAuthConfigurationBasicAuthConfiguration: qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}.

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}.

---

### QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration <a name="QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

const qbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration: qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#authorization_url QbusinessPlugin#authorization_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#token_url QbusinessPlugin#token_url}. |

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#authorization_url QbusinessPlugin#authorization_url}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}.

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}.

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#token_url QbusinessPlugin#token_url}.

---

### QbusinessPluginConfig <a name="QbusinessPluginConfig" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

const qbusinessPluginConfig: qbusinessPlugin.QbusinessPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.authConfiguration">authConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.customPluginConfiguration">customPluginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.serverUrl">serverUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authConfiguration`<sup>Required</sup> <a name="authConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.authConfiguration"></a>

```typescript
public readonly authConfiguration: QbusinessPluginAuthConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}.

---

##### `customPluginConfiguration`<sup>Optional</sup> <a name="customPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.customPluginConfiguration"></a>

```typescript
public readonly customPluginConfiguration: QbusinessPluginCustomPluginConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}.

---

##### `serverUrl`<sup>Optional</sup> <a name="serverUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.serverUrl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QbusinessPluginTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}.

---

### QbusinessPluginCustomPluginConfiguration <a name="QbusinessPluginCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

const qbusinessPluginCustomPluginConfiguration: qbusinessPlugin.QbusinessPluginCustomPluginConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#api_schema QbusinessPlugin#api_schema}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchemaType">apiSchemaType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#api_schema_type QbusinessPlugin#api_schema_type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#description QbusinessPlugin#description}. |

---

##### `apiSchema`<sup>Optional</sup> <a name="apiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchema"></a>

```typescript
public readonly apiSchema: QbusinessPluginCustomPluginConfigurationApiSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#api_schema QbusinessPlugin#api_schema}.

---

##### `apiSchemaType`<sup>Optional</sup> <a name="apiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchemaType"></a>

```typescript
public readonly apiSchemaType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#api_schema_type QbusinessPlugin#api_schema_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#description QbusinessPlugin#description}.

---

### QbusinessPluginCustomPluginConfigurationApiSchema <a name="QbusinessPluginCustomPluginConfigurationApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

const qbusinessPluginCustomPluginConfigurationApiSchema: qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.payload">payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#payload QbusinessPlugin#payload}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#s3 QbusinessPlugin#s3}. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#payload QbusinessPlugin#payload}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.s3"></a>

```typescript
public readonly s3: QbusinessPluginCustomPluginConfigurationApiSchemaS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#s3 QbusinessPlugin#s3}.

---

### QbusinessPluginCustomPluginConfigurationApiSchemaS3 <a name="QbusinessPluginCustomPluginConfigurationApiSchemaS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

const qbusinessPluginCustomPluginConfigurationApiSchemaS3: qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#bucket QbusinessPlugin#bucket}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#bucket QbusinessPlugin#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}.

---

### QbusinessPluginTags <a name="QbusinessPluginTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

const qbusinessPluginTags: qbusinessPlugin.QbusinessPluginTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#value QbusinessPlugin#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_plugin#value QbusinessPlugin#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessPluginAuthConfigurationBasicAuthConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---


### QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetAuthorizationUrl">resetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationUrl` <a name="resetAuthorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetAuthorizationUrl"></a>

```typescript
public resetAuthorizationUrl(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrlInput"></a>

```typescript
public readonly authorizationUrlInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---


### QbusinessPluginAuthConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration">putBasicAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration">putOAuth2ClientCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetBasicAuthConfiguration">resetBasicAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetNoAuthConfiguration">resetNoAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetOAuth2ClientCredentialConfiguration">resetOAuth2ClientCredentialConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuthConfiguration` <a name="putBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration"></a>

```typescript
public putBasicAuthConfiguration(value: QbusinessPluginAuthConfigurationBasicAuthConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---

##### `putOAuth2ClientCredentialConfiguration` <a name="putOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration"></a>

```typescript
public putOAuth2ClientCredentialConfiguration(value: QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---

##### `resetBasicAuthConfiguration` <a name="resetBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetBasicAuthConfiguration"></a>

```typescript
public resetBasicAuthConfiguration(): void
```

##### `resetNoAuthConfiguration` <a name="resetNoAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetNoAuthConfiguration"></a>

```typescript
public resetNoAuthConfiguration(): void
```

##### `resetOAuth2ClientCredentialConfiguration` <a name="resetOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetOAuth2ClientCredentialConfiguration"></a>

```typescript
public resetOAuth2ClientCredentialConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration">basicAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration">oAuth2ClientCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfigurationInput">basicAuthConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfigurationInput">noAuthConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfigurationInput">oAuth2ClientCredentialConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration">noAuthConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuthConfiguration`<sup>Required</sup> <a name="basicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration"></a>

```typescript
public readonly basicAuthConfiguration: QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a>

---

##### `oAuth2ClientCredentialConfiguration`<sup>Required</sup> <a name="oAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration"></a>

```typescript
public readonly oAuth2ClientCredentialConfiguration: QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a>

---

##### `basicAuthConfigurationInput`<sup>Optional</sup> <a name="basicAuthConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfigurationInput"></a>

```typescript
public readonly basicAuthConfigurationInput: IResolvable | QbusinessPluginAuthConfigurationBasicAuthConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---

##### `noAuthConfigurationInput`<sup>Optional</sup> <a name="noAuthConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfigurationInput"></a>

```typescript
public readonly noAuthConfigurationInput: string;
```

- *Type:* string

---

##### `oAuth2ClientCredentialConfigurationInput`<sup>Optional</sup> <a name="oAuth2ClientCredentialConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfigurationInput"></a>

```typescript
public readonly oAuth2ClientCredentialConfigurationInput: IResolvable | QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---

##### `noAuthConfiguration`<sup>Required</sup> <a name="noAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration"></a>

```typescript
public readonly noAuthConfiguration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessPluginAuthConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

---


### QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference <a name="QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3"></a>

```typescript
public putS3(value: QbusinessPluginCustomPluginConfigurationApiSchemaS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3"></a>

```typescript
public readonly s3: QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | QbusinessPluginCustomPluginConfigurationApiSchemaS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessPluginCustomPluginConfigurationApiSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

---


### QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference <a name="QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessPluginCustomPluginConfigurationApiSchemaS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---


### QbusinessPluginCustomPluginConfigurationOutputReference <a name="QbusinessPluginCustomPluginConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema">putApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchema">resetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchemaType">resetApiSchemaType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiSchema` <a name="putApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema"></a>

```typescript
public putApiSchema(value: QbusinessPluginCustomPluginConfigurationApiSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

---

##### `resetApiSchema` <a name="resetApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchema"></a>

```typescript
public resetApiSchema(): void
```

##### `resetApiSchemaType` <a name="resetApiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchemaType"></a>

```typescript
public resetApiSchemaType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaInput">apiSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaTypeInput">apiSchemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType">apiSchemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiSchema`<sup>Required</sup> <a name="apiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema"></a>

```typescript
public readonly apiSchema: QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a>

---

##### `apiSchemaInput`<sup>Optional</sup> <a name="apiSchemaInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaInput"></a>

```typescript
public readonly apiSchemaInput: IResolvable | QbusinessPluginCustomPluginConfigurationApiSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

---

##### `apiSchemaTypeInput`<sup>Optional</sup> <a name="apiSchemaTypeInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaTypeInput"></a>

```typescript
public readonly apiSchemaTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `apiSchemaType`<sup>Required</sup> <a name="apiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType"></a>

```typescript
public readonly apiSchemaType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessPluginCustomPluginConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

---


### QbusinessPluginTagsList <a name="QbusinessPluginTagsList" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPluginTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get"></a>

```typescript
public get(index: number): QbusinessPluginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessPluginTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>[]

---


### QbusinessPluginTagsOutputReference <a name="QbusinessPluginTagsOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer"></a>

```typescript
import { qbusinessPlugin } from '@cdktn/provider-awscc'

new qbusinessPlugin.QbusinessPluginTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessPluginTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>

---



