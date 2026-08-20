# `codestarconnectionsSyncConfiguration` Submodule <a name="`codestarconnectionsSyncConfiguration` Submodule" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsSyncConfiguration <a name="CodestarconnectionsSyncConfiguration" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration awscc_codestarconnections_sync_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer"></a>

```typescript
import { codestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

new codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration(scope: Construct, id: string, config: CodestarconnectionsSyncConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig">CodestarconnectionsSyncConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig">CodestarconnectionsSyncConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus">resetPublishDeploymentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn">resetTriggerResourceUpdateOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetPublishDeploymentStatus` <a name="resetPublishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus"></a>

```typescript
public resetPublishDeploymentStatus(): void
```

##### `resetTriggerResourceUpdateOn` <a name="resetTriggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn"></a>

```typescript
public resetTriggerResourceUpdateOn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct"></a>

```typescript
import { codestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement"></a>

```typescript
import { codestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource"></a>

```typescript
import { codestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport"></a>

```typescript
import { codestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodestarconnectionsSyncConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodestarconnectionsSyncConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsSyncConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput">configFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput">publishDeploymentStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput">repositoryLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput">syncTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput">triggerResourceUpdateOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile">configFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus">publishDeploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId">repositoryLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType">syncType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn">triggerResourceUpdateOn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `configFileInput`<sup>Optional</sup> <a name="configFileInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput"></a>

```typescript
public readonly configFileInput: string;
```

- *Type:* string

---

##### `publishDeploymentStatusInput`<sup>Optional</sup> <a name="publishDeploymentStatusInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput"></a>

```typescript
public readonly publishDeploymentStatusInput: string;
```

- *Type:* string

---

##### `repositoryLinkIdInput`<sup>Optional</sup> <a name="repositoryLinkIdInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput"></a>

```typescript
public readonly repositoryLinkIdInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `syncTypeInput`<sup>Optional</sup> <a name="syncTypeInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput"></a>

```typescript
public readonly syncTypeInput: string;
```

- *Type:* string

---

##### `triggerResourceUpdateOnInput`<sup>Optional</sup> <a name="triggerResourceUpdateOnInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput"></a>

```typescript
public readonly triggerResourceUpdateOnInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `configFile`<sup>Required</sup> <a name="configFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

---

##### `publishDeploymentStatus`<sup>Required</sup> <a name="publishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus"></a>

```typescript
public readonly publishDeploymentStatus: string;
```

- *Type:* string

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId"></a>

```typescript
public readonly repositoryLinkId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `syncType`<sup>Required</sup> <a name="syncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType"></a>

```typescript
public readonly syncType: string;
```

- *Type:* string

---

##### `triggerResourceUpdateOn`<sup>Required</sup> <a name="triggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn"></a>

```typescript
public readonly triggerResourceUpdateOn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsSyncConfigurationConfig <a name="CodestarconnectionsSyncConfigurationConfig" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.Initializer"></a>

```typescript
import { codestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

const codestarconnectionsSyncConfigurationConfig: codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch">branch</a></code> | <code>string</code> | The name of the branch of the repository from which resources are to be synchronized,. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile">configFile</a></code> | <code>string</code> | The source provider repository path of the sync configuration file of the respective SyncType. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId">repositoryLinkId</a></code> | <code>string</code> | A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName">resourceName</a></code> | <code>string</code> | The name of the resource that is being synchronized to the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType">syncType</a></code> | <code>string</code> | The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus">publishDeploymentStatus</a></code> | <code>string</code> | Whether to enable or disable publishing of deployment status to source providers. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn">triggerResourceUpdateOn</a></code> | <code>string</code> | When to trigger Git sync to begin the stack update. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The name of the branch of the repository from which resources are to be synchronized,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#branch CodestarconnectionsSyncConfiguration#branch}

---

##### `configFile`<sup>Required</sup> <a name="configFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

The source provider repository path of the sync configuration file of the respective SyncType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#config_file CodestarconnectionsSyncConfiguration#config_file}

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId"></a>

```typescript
public readonly repositoryLinkId: string;
```

- *Type:* string

A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#repository_link_id CodestarconnectionsSyncConfiguration#repository_link_id}

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The name of the resource that is being synchronized to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#resource_name CodestarconnectionsSyncConfiguration#resource_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#role_arn CodestarconnectionsSyncConfiguration#role_arn}

---

##### `syncType`<sup>Required</sup> <a name="syncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType"></a>

```typescript
public readonly syncType: string;
```

- *Type:* string

The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#sync_type CodestarconnectionsSyncConfiguration#sync_type}

---

##### `publishDeploymentStatus`<sup>Optional</sup> <a name="publishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus"></a>

```typescript
public readonly publishDeploymentStatus: string;
```

- *Type:* string

Whether to enable or disable publishing of deployment status to source providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#publish_deployment_status CodestarconnectionsSyncConfiguration#publish_deployment_status}

---

##### `triggerResourceUpdateOn`<sup>Optional</sup> <a name="triggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn"></a>

```typescript
public readonly triggerResourceUpdateOn: string;
```

- *Type:* string

When to trigger Git sync to begin the stack update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_sync_configuration#trigger_resource_update_on CodestarconnectionsSyncConfiguration#trigger_resource_update_on}

---



