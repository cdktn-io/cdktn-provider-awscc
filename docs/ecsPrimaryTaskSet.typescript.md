# `ecsPrimaryTaskSet` Submodule <a name="`ecsPrimaryTaskSet` Submodule" id="@cdktn/provider-awscc.ecsPrimaryTaskSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsPrimaryTaskSet <a name="EcsPrimaryTaskSet" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_primary_task_set awscc_ecs_primary_task_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.Initializer"></a>

```typescript
import { ecsPrimaryTaskSet } from '@cdktn/provider-awscc'

new ecsPrimaryTaskSet.EcsPrimaryTaskSet(scope: Construct, id: string, config: EcsPrimaryTaskSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig">EcsPrimaryTaskSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig">EcsPrimaryTaskSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcsPrimaryTaskSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isConstruct"></a>

```typescript
import { ecsPrimaryTaskSet } from '@cdktn/provider-awscc'

ecsPrimaryTaskSet.EcsPrimaryTaskSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isTerraformElement"></a>

```typescript
import { ecsPrimaryTaskSet } from '@cdktn/provider-awscc'

ecsPrimaryTaskSet.EcsPrimaryTaskSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isTerraformResource"></a>

```typescript
import { ecsPrimaryTaskSet } from '@cdktn/provider-awscc'

ecsPrimaryTaskSet.EcsPrimaryTaskSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.generateConfigForImport"></a>

```typescript
import { ecsPrimaryTaskSet } from '@cdktn/provider-awscc'

ecsPrimaryTaskSet.EcsPrimaryTaskSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EcsPrimaryTaskSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsPrimaryTaskSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsPrimaryTaskSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_primary_task_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcsPrimaryTaskSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.taskSetIdInput">taskSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.taskSetId">taskSetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `taskSetIdInput`<sup>Optional</sup> <a name="taskSetIdInput" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.taskSetIdInput"></a>

```typescript
public readonly taskSetIdInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `taskSetId`<sup>Required</sup> <a name="taskSetId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.taskSetId"></a>

```typescript
public readonly taskSetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsPrimaryTaskSetConfig <a name="EcsPrimaryTaskSetConfig" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.Initializer"></a>

```typescript
import { ecsPrimaryTaskSet } from '@cdktn/provider-awscc'

const ecsPrimaryTaskSetConfig: ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.cluster">cluster</a></code> | <code>string</code> | The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.service">service</a></code> | <code>string</code> | The short name or full Amazon Resource Name (ARN) of the service to create the task set in. |
| <code><a href="#@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.taskSetId">taskSetId</a></code> | <code>string</code> | The ID or full Amazon Resource Name (ARN) of the task set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_primary_task_set#cluster EcsPrimaryTaskSet#cluster}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The short name or full Amazon Resource Name (ARN) of the service to create the task set in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_primary_task_set#service EcsPrimaryTaskSet#service}

---

##### `taskSetId`<sup>Required</sup> <a name="taskSetId" id="@cdktn/provider-awscc.ecsPrimaryTaskSet.EcsPrimaryTaskSetConfig.property.taskSetId"></a>

```typescript
public readonly taskSetId: string;
```

- *Type:* string

The ID or full Amazon Resource Name (ARN) of the task set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_primary_task_set#task_set_id EcsPrimaryTaskSet#task_set_id}

---



