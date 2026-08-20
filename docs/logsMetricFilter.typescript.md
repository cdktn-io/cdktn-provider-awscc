# `logsMetricFilter` Submodule <a name="`logsMetricFilter` Submodule" id="@cdktn/provider-awscc.logsMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsMetricFilter <a name="LogsMetricFilter" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter awscc_logs_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

new logsMetricFilter.LogsMetricFilter(scope: Construct, id: string, config: LogsMetricFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig">LogsMetricFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig">LogsMetricFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations">putMetricTransformations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs">resetApplyOnTransformedLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions">resetEmitSystemFieldDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria">resetFieldSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName">resetFilterName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricTransformations` <a name="putMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations"></a>

```typescript
public putMetricTransformations(value: IResolvable | LogsMetricFilterMetricTransformations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]

---

##### `resetApplyOnTransformedLogs` <a name="resetApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs"></a>

```typescript
public resetApplyOnTransformedLogs(): void
```

##### `resetEmitSystemFieldDimensions` <a name="resetEmitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions"></a>

```typescript
public resetEmitSystemFieldDimensions(): void
```

##### `resetFieldSelectionCriteria` <a name="resetFieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria"></a>

```typescript
public resetFieldSelectionCriteria(): void
```

##### `resetFilterName` <a name="resetFilterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName"></a>

```typescript
public resetFilterName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

logsMetricFilter.LogsMetricFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

logsMetricFilter.LogsMetricFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

logsMetricFilter.LogsMetricFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

logsMetricFilter.LogsMetricFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsMetricFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsMetricFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsMetricFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations">metricTransformations</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput">applyOnTransformedLogsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput">emitSystemFieldDimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput">fieldSelectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput">filterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput">filterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput">metricTransformationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions">emitSystemFieldDimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria">fieldSelectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName">filterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern">filterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricTransformations`<sup>Required</sup> <a name="metricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations"></a>

```typescript
public readonly metricTransformations: LogsMetricFilterMetricTransformationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a>

---

##### `applyOnTransformedLogsInput`<sup>Optional</sup> <a name="applyOnTransformedLogsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput"></a>

```typescript
public readonly applyOnTransformedLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `emitSystemFieldDimensionsInput`<sup>Optional</sup> <a name="emitSystemFieldDimensionsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput"></a>

```typescript
public readonly emitSystemFieldDimensionsInput: string[];
```

- *Type:* string[]

---

##### `fieldSelectionCriteriaInput`<sup>Optional</sup> <a name="fieldSelectionCriteriaInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput"></a>

```typescript
public readonly fieldSelectionCriteriaInput: string;
```

- *Type:* string

---

##### `filterNameInput`<sup>Optional</sup> <a name="filterNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput"></a>

```typescript
public readonly filterNameInput: string;
```

- *Type:* string

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput"></a>

```typescript
public readonly filterPatternInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `metricTransformationsInput`<sup>Optional</sup> <a name="metricTransformationsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput"></a>

```typescript
public readonly metricTransformationsInput: IResolvable | LogsMetricFilterMetricTransformations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]

---

##### `applyOnTransformedLogs`<sup>Required</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs"></a>

```typescript
public readonly applyOnTransformedLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `emitSystemFieldDimensions`<sup>Required</sup> <a name="emitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions"></a>

```typescript
public readonly emitSystemFieldDimensions: string[];
```

- *Type:* string[]

---

##### `fieldSelectionCriteria`<sup>Required</sup> <a name="fieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria"></a>

```typescript
public readonly fieldSelectionCriteria: string;
```

- *Type:* string

---

##### `filterName`<sup>Required</sup> <a name="filterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsMetricFilterConfig <a name="LogsMetricFilterConfig" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.Initializer"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

const logsMetricFilterConfig: logsMetricFilter.LogsMetricFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern">filterPattern</a></code> | <code>string</code> | A filter pattern for extracting metric data out of ingested log events. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | The name of an existing log group that you want to associate with this metric filter. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations">metricTransformations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]</code> | The metric transformations. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions">emitSystemFieldDimensions</a></code> | <code>string[]</code> | The list of system fields that are emitted as additional dimensions in the generated metrics. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria">fieldSelectionCriteria</a></code> | <code>string</code> | The filter expression that specifies which log events are processed by this metric filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName">filterName</a></code> | <code>string</code> | The name of the metric filter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

A filter pattern for extracting metric data out of ingested log events.

For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#filter_pattern LogsMetricFilter#filter_pattern}

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The name of an existing log group that you want to associate with this metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#log_group_name LogsMetricFilter#log_group_name}

---

##### `metricTransformations`<sup>Required</sup> <a name="metricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations"></a>

```typescript
public readonly metricTransformations: IResolvable | LogsMetricFilterMetricTransformations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]

The metric transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_transformations LogsMetricFilter#metric_transformations}

---

##### `applyOnTransformedLogs`<sup>Optional</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs"></a>

```typescript
public readonly applyOnTransformedLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
 If this value is ``true``, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#apply_on_transformed_logs LogsMetricFilter#apply_on_transformed_logs}

---

##### `emitSystemFieldDimensions`<sup>Optional</sup> <a name="emitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions"></a>

```typescript
public readonly emitSystemFieldDimensions: string[];
```

- *Type:* string[]

The list of system fields that are emitted as additional dimensions in the generated metrics.

Returns the ``emitSystemFieldDimensions`` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#emit_system_field_dimensions LogsMetricFilter#emit_system_field_dimensions}

---

##### `fieldSelectionCriteria`<sup>Optional</sup> <a name="fieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria"></a>

```typescript
public readonly fieldSelectionCriteria: string;
```

- *Type:* string

The filter expression that specifies which log events are processed by this metric filter based on system fields.

Returns the ``fieldSelectionCriteria`` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#field_selection_criteria LogsMetricFilter#field_selection_criteria}

---

##### `filterName`<sup>Optional</sup> <a name="filterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

The name of the metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#filter_name LogsMetricFilter#filter_name}

---

### LogsMetricFilterMetricTransformations <a name="LogsMetricFilterMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.Initializer"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

const logsMetricFilterMetricTransformations: logsMetricFilter.LogsMetricFilterMetricTransformations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName">metricName</a></code> | <code>string</code> | The name of the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | A custom namespace to contain your metric in CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue">metricValue</a></code> | <code>string</code> | The value that is published to the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue">defaultValue</a></code> | <code>number</code> | (Optional) The value to emit when a filter pattern does not match a log event. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]</code> | The fields to use as dimensions for the metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit">unit</a></code> | <code>string</code> | The unit to assign to the metric. If you omit this, the unit is set as ``None``. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the CloudWatch metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_name LogsMetricFilter#metric_name}

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

A custom namespace to contain your metric in CloudWatch.

Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_namespace LogsMetricFilter#metric_namespace}

---

##### `metricValue`<sup>Required</sup> <a name="metricValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue"></a>

```typescript
public readonly metricValue: string;
```

- *Type:* string

The value that is published to the CloudWatch metric.

For example, if you're counting the occurrences of a particular term like ``Error``, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as ``$.size``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_value LogsMetricFilter#metric_value}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue"></a>

```typescript
public readonly defaultValue: number;
```

- *Type:* number

(Optional) The value to emit when a filter pattern does not match a log event.

This value can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#default_value LogsMetricFilter#default_value}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | LogsMetricFilterMetricTransformationsDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]

The fields to use as dimensions for the metric.

One metric filter can include as many as three dimensions.
  Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as ``IPAddress`` or ``requestID`` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. 
 CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
 You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#dimensions LogsMetricFilter#dimensions}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit to assign to the metric. If you omit this, the unit is set as ``None``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#unit LogsMetricFilter#unit}

---

### LogsMetricFilterMetricTransformationsDimensions <a name="LogsMetricFilterMetricTransformationsDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.Initializer"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

const logsMetricFilterMetricTransformationsDimensions: logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key">key</a></code> | <code>string</code> | The name for the CW metric dimension that the metric filter creates. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value">value</a></code> | <code>string</code> | The log event field that will contain the value for this dimension. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name for the CW metric dimension that the metric filter creates.

Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#key LogsMetricFilter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The log event field that will contain the value for this dimension.

This dimension will only be published for a metric if the value is found in the log event. For example, ``$.eventType`` for JSON log events, or ``$server`` for space-delimited log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#value LogsMetricFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsMetricFilterMetricTransformationsDimensionsList <a name="LogsMetricFilterMetricTransformationsDimensionsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

new logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get"></a>

```typescript
public get(index: number): LogsMetricFilterMetricTransformationsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsMetricFilterMetricTransformationsDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]

---


### LogsMetricFilterMetricTransformationsDimensionsOutputReference <a name="LogsMetricFilterMetricTransformationsDimensionsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

new logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsMetricFilterMetricTransformationsDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>

---


### LogsMetricFilterMetricTransformationsList <a name="LogsMetricFilterMetricTransformationsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

new logsMetricFilter.LogsMetricFilterMetricTransformationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get"></a>

```typescript
public get(index: number): LogsMetricFilterMetricTransformationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsMetricFilterMetricTransformations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]

---


### LogsMetricFilterMetricTransformationsOutputReference <a name="LogsMetricFilterMetricTransformationsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer"></a>

```typescript
import { logsMetricFilter } from '@cdktn/provider-awscc'

new logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | LogsMetricFilterMetricTransformationsDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput">metricValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue">defaultValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue">metricValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: LogsMetricFilterMetricTransformationsDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | LogsMetricFilterMetricTransformationsDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput"></a>

```typescript
public readonly metricNamespaceInput: string;
```

- *Type:* string

---

##### `metricValueInput`<sup>Optional</sup> <a name="metricValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput"></a>

```typescript
public readonly metricValueInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `metricValue`<sup>Required</sup> <a name="metricValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue"></a>

```typescript
public readonly metricValue: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsMetricFilterMetricTransformations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>

---



