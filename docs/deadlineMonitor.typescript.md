# `deadlineMonitor` Submodule <a name="`deadlineMonitor` Submodule" id="@cdktn/provider-awscc.deadlineMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineMonitor <a name="DeadlineMonitor" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor awscc_deadline_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.Initializer"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

new deadlineMonitor.DeadlineMonitor(scope: Construct, id: string, config: DeadlineMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig">DeadlineMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig">DeadlineMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.resetIdentityCenterRegion">resetIdentityCenterRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.putTags"></a>

```typescript
public putTags(value: IResolvable | DeadlineMonitorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a>[]

---

##### `resetIdentityCenterRegion` <a name="resetIdentityCenterRegion" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.resetIdentityCenterRegion"></a>

```typescript
public resetIdentityCenterRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DeadlineMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isConstruct"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

deadlineMonitor.DeadlineMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isTerraformElement"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

deadlineMonitor.DeadlineMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isTerraformResource"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

deadlineMonitor.DeadlineMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.generateConfigForImport"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

deadlineMonitor.DeadlineMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DeadlineMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeadlineMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeadlineMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterApplicationArn">identityCenterApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList">DeadlineMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterInstanceArnInput">identityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterRegionInput">identityCenterRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.subdomainInput">subdomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterRegion">identityCenterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityCenterApplicationArn`<sup>Required</sup> <a name="identityCenterApplicationArn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterApplicationArn"></a>

```typescript
public readonly identityCenterApplicationArn: string;
```

- *Type:* string

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.tags"></a>

```typescript
public readonly tags: DeadlineMonitorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList">DeadlineMonitorTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `identityCenterInstanceArnInput`<sup>Optional</sup> <a name="identityCenterInstanceArnInput" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterInstanceArnInput"></a>

```typescript
public readonly identityCenterInstanceArnInput: string;
```

- *Type:* string

---

##### `identityCenterRegionInput`<sup>Optional</sup> <a name="identityCenterRegionInput" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterRegionInput"></a>

```typescript
public readonly identityCenterRegionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `subdomainInput`<sup>Optional</sup> <a name="subdomainInput" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.subdomainInput"></a>

```typescript
public readonly subdomainInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DeadlineMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a>[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `identityCenterInstanceArn`<sup>Required</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

---

##### `identityCenterRegion`<sup>Required</sup> <a name="identityCenterRegion" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.identityCenterRegion"></a>

```typescript
public readonly identityCenterRegion: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineMonitorConfig <a name="DeadlineMonitorConfig" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.Initializer"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

const deadlineMonitorConfig: deadlineMonitor.DeadlineMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#display_name DeadlineMonitor#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#identity_center_instance_arn DeadlineMonitor#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#role_arn DeadlineMonitor#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.subdomain">subdomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#subdomain DeadlineMonitor#subdomain}. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.identityCenterRegion">identityCenterRegion</a></code> | <code>string</code> | The AWS region where IAM Identity Center is enabled. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#display_name DeadlineMonitor#display_name}.

---

##### `identityCenterInstanceArn`<sup>Required</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#identity_center_instance_arn DeadlineMonitor#identity_center_instance_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#role_arn DeadlineMonitor#role_arn}.

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#subdomain DeadlineMonitor#subdomain}.

---

##### `identityCenterRegion`<sup>Optional</sup> <a name="identityCenterRegion" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.identityCenterRegion"></a>

```typescript
public readonly identityCenterRegion: string;
```

- *Type:* string

The AWS region where IAM Identity Center is enabled.

Required when Identity Center is in a different region than the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#identity_center_region DeadlineMonitor#identity_center_region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DeadlineMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#tags DeadlineMonitor#tags}

---

### DeadlineMonitorTags <a name="DeadlineMonitorTags" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags.Initializer"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

const deadlineMonitorTags: deadlineMonitor.DeadlineMonitorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#key DeadlineMonitor#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_monitor#value DeadlineMonitor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineMonitorTagsList <a name="DeadlineMonitorTagsList" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.Initializer"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

new deadlineMonitor.DeadlineMonitorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.get"></a>

```typescript
public get(index: number): DeadlineMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeadlineMonitorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a>[]

---


### DeadlineMonitorTagsOutputReference <a name="DeadlineMonitorTagsOutputReference" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer"></a>

```typescript
import { deadlineMonitor } from '@cdktn/provider-awscc'

new deadlineMonitor.DeadlineMonitorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeadlineMonitorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineMonitor.DeadlineMonitorTags">DeadlineMonitorTags</a>

---



