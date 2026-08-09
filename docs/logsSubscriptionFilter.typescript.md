# `logsSubscriptionFilter` Submodule <a name="`logsSubscriptionFilter` Submodule" id="@cdktn/provider-awscc.logsSubscriptionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsSubscriptionFilter <a name="LogsSubscriptionFilter" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter awscc_logs_subscription_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer"></a>

```typescript
import { logsSubscriptionFilter } from '@cdktn/provider-awscc'

new logsSubscriptionFilter.LogsSubscriptionFilter(scope: Construct, id: string, config: LogsSubscriptionFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig">LogsSubscriptionFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig">LogsSubscriptionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetApplyOnTransformedLogs">resetApplyOnTransformedLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetDistribution">resetDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetEmitSystemFields">resetEmitSystemFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFieldSelectionCriteria">resetFieldSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFilterName">resetFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApplyOnTransformedLogs` <a name="resetApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetApplyOnTransformedLogs"></a>

```typescript
public resetApplyOnTransformedLogs(): void
```

##### `resetDistribution` <a name="resetDistribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetDistribution"></a>

```typescript
public resetDistribution(): void
```

##### `resetEmitSystemFields` <a name="resetEmitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetEmitSystemFields"></a>

```typescript
public resetEmitSystemFields(): void
```

##### `resetFieldSelectionCriteria` <a name="resetFieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFieldSelectionCriteria"></a>

```typescript
public resetFieldSelectionCriteria(): void
```

##### `resetFilterName` <a name="resetFilterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFilterName"></a>

```typescript
public resetFilterName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsSubscriptionFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct"></a>

```typescript
import { logsSubscriptionFilter } from '@cdktn/provider-awscc'

logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement"></a>

```typescript
import { logsSubscriptionFilter } from '@cdktn/provider-awscc'

logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource"></a>

```typescript
import { logsSubscriptionFilter } from '@cdktn/provider-awscc'

logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport"></a>

```typescript
import { logsSubscriptionFilter } from '@cdktn/provider-awscc'

logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LogsSubscriptionFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsSubscriptionFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsSubscriptionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsSubscriptionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogsInput">applyOnTransformedLogsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distributionInput">distributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFieldsInput">emitSystemFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteriaInput">fieldSelectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterNameInput">filterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPatternInput">filterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFields">emitSystemFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteria">fieldSelectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterName">filterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPattern">filterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `applyOnTransformedLogsInput`<sup>Optional</sup> <a name="applyOnTransformedLogsInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogsInput"></a>

```typescript
public readonly applyOnTransformedLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `distributionInput`<sup>Optional</sup> <a name="distributionInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distributionInput"></a>

```typescript
public readonly distributionInput: string;
```

- *Type:* string

---

##### `emitSystemFieldsInput`<sup>Optional</sup> <a name="emitSystemFieldsInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFieldsInput"></a>

```typescript
public readonly emitSystemFieldsInput: string[];
```

- *Type:* string[]

---

##### `fieldSelectionCriteriaInput`<sup>Optional</sup> <a name="fieldSelectionCriteriaInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteriaInput"></a>

```typescript
public readonly fieldSelectionCriteriaInput: string;
```

- *Type:* string

---

##### `filterNameInput`<sup>Optional</sup> <a name="filterNameInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterNameInput"></a>

```typescript
public readonly filterNameInput: string;
```

- *Type:* string

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPatternInput"></a>

```typescript
public readonly filterPatternInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `applyOnTransformedLogs`<sup>Required</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogs"></a>

```typescript
public readonly applyOnTransformedLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `emitSystemFields`<sup>Required</sup> <a name="emitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFields"></a>

```typescript
public readonly emitSystemFields: string[];
```

- *Type:* string[]

---

##### `fieldSelectionCriteria`<sup>Required</sup> <a name="fieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteria"></a>

```typescript
public readonly fieldSelectionCriteria: string;
```

- *Type:* string

---

##### `filterName`<sup>Required</sup> <a name="filterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsSubscriptionFilterConfig <a name="LogsSubscriptionFilterConfig" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.Initializer"></a>

```typescript
import { logsSubscriptionFilter } from '@cdktn/provider-awscc'

const logsSubscriptionFilterConfig: logsSubscriptionFilter.LogsSubscriptionFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.destinationArn">destinationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the destination. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterPattern">filterPattern</a></code> | <code>string</code> | The filtering expressions that restrict what gets delivered to the destination AWS resource. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | The log group to associate with the subscription filter. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.distribution">distribution</a></code> | <code>string</code> | The method used to distribute log data to the destination, which can be either random or grouped by log stream. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.emitSystemFields">emitSystemFields</a></code> | <code>string[]</code> | The list of system fields that are included in the log events sent to the subscription destination. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.fieldSelectionCriteria">fieldSelectionCriteria</a></code> | <code>string</code> | The filter expression that specifies which log events are processed by this subscription filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterName">filterName</a></code> | <code>string</code> | The name of the subscription filter. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an IAM role that grants CWL permissions to deliver ingested log events to the destination stream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#destination_arn LogsSubscriptionFilter#destination_arn}

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

The filtering expressions that restrict what gets delivered to the destination AWS resource.

For more information about the filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#filter_pattern LogsSubscriptionFilter#filter_pattern}

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The log group to associate with the subscription filter.

All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#log_group_name LogsSubscriptionFilter#log_group_name}

---

##### `applyOnTransformedLogs`<sup>Optional</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.applyOnTransformedLogs"></a>

```typescript
public readonly applyOnTransformedLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
 If this value is ``true``, the subscription filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#apply_on_transformed_logs LogsSubscriptionFilter#apply_on_transformed_logs}

---

##### `distribution`<sup>Optional</sup> <a name="distribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

The method used to distribute log data to the destination, which can be either random or grouped by log stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#distribution LogsSubscriptionFilter#distribution}

---

##### `emitSystemFields`<sup>Optional</sup> <a name="emitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.emitSystemFields"></a>

```typescript
public readonly emitSystemFields: string[];
```

- *Type:* string[]

The list of system fields that are included in the log events sent to the subscription destination.

Returns the ``emitSystemFields`` value if it was specified when the subscription filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#emit_system_fields LogsSubscriptionFilter#emit_system_fields}

---

##### `fieldSelectionCriteria`<sup>Optional</sup> <a name="fieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.fieldSelectionCriteria"></a>

```typescript
public readonly fieldSelectionCriteria: string;
```

- *Type:* string

The filter expression that specifies which log events are processed by this subscription filter based on system fields.

Returns the ``fieldSelectionCriteria`` value if it was specified when the subscription filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#field_selection_criteria LogsSubscriptionFilter#field_selection_criteria}

---

##### `filterName`<sup>Optional</sup> <a name="filterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

The name of the subscription filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#filter_name LogsSubscriptionFilter#filter_name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an IAM role that grants CWL permissions to deliver ingested log events to the destination stream.

You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#role_arn LogsSubscriptionFilter#role_arn}

---



