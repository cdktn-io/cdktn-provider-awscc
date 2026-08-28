# `logsScheduledQuery` Submodule <a name="`logsScheduledQuery` Submodule" id="@cdktn/provider-awscc.logsScheduledQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsScheduledQuery <a name="LogsScheduledQuery" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query awscc_logs_scheduled_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

new logsScheduledQuery.LogsScheduledQuery(scope: Construct, id: string, config: LogsScheduledQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig">LogsScheduledQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig">LogsScheduledQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration">putDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDestinationConfiguration">resetDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetLogGroupIdentifiers">resetLogGroupIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleEndTime">resetScheduleEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleStartTime">resetScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfiguration` <a name="putDestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration"></a>

```typescript
public putDestinationConfiguration(value: LogsScheduledQueryDestinationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags"></a>

```typescript
public putTags(value: IResolvable | LogsScheduledQueryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationConfiguration` <a name="resetDestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDestinationConfiguration"></a>

```typescript
public resetDestinationConfiguration(): void
```

##### `resetLogGroupIdentifiers` <a name="resetLogGroupIdentifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetLogGroupIdentifiers"></a>

```typescript
public resetLogGroupIdentifiers(): void
```

##### `resetScheduleEndTime` <a name="resetScheduleEndTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleEndTime"></a>

```typescript
public resetScheduleEndTime(): void
```

##### `resetScheduleStartTime` <a name="resetScheduleStartTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleStartTime"></a>

```typescript
public resetScheduleStartTime(): void
```

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetStartTimeOffset"></a>

```typescript
public resetStartTimeOffset(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsScheduledQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

logsScheduledQuery.LogsScheduledQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

logsScheduledQuery.LogsScheduledQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

logsScheduledQuery.LogsScheduledQuery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

logsScheduledQuery.LogsScheduledQuery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LogsScheduledQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsScheduledQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsScheduledQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsScheduledQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastExecutionStatus">lastExecutionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastTriggeredTime">lastTriggeredTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduledQueryArn">scheduledQueryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList">LogsScheduledQueryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfigurationInput">destinationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiersInput">logGroupIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguageInput">queryLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTimeInput">scheduleEndTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTimeInput">scheduleStartTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiers">logGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguage">queryLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTime">scheduleEndTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTime">scheduleStartTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffset">startTimeOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfiguration"></a>

```typescript
public readonly destinationConfiguration: LogsScheduledQueryDestinationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastExecutionStatus`<sup>Required</sup> <a name="lastExecutionStatus" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastExecutionStatus"></a>

```typescript
public readonly lastExecutionStatus: string;
```

- *Type:* string

---

##### `lastTriggeredTime`<sup>Required</sup> <a name="lastTriggeredTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastTriggeredTime"></a>

```typescript
public readonly lastTriggeredTime: number;
```

- *Type:* number

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: number;
```

- *Type:* number

---

##### `scheduledQueryArn`<sup>Required</sup> <a name="scheduledQueryArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduledQueryArn"></a>

```typescript
public readonly scheduledQueryArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tags"></a>

```typescript
public readonly tags: LogsScheduledQueryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList">LogsScheduledQueryTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationConfigurationInput`<sup>Optional</sup> <a name="destinationConfigurationInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfigurationInput"></a>

```typescript
public readonly destinationConfigurationInput: IResolvable | LogsScheduledQueryDestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `logGroupIdentifiersInput`<sup>Optional</sup> <a name="logGroupIdentifiersInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiersInput"></a>

```typescript
public readonly logGroupIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryLanguageInput`<sup>Optional</sup> <a name="queryLanguageInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguageInput"></a>

```typescript
public readonly queryLanguageInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `scheduleEndTimeInput`<sup>Optional</sup> <a name="scheduleEndTimeInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTimeInput"></a>

```typescript
public readonly scheduleEndTimeInput: number;
```

- *Type:* number

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleStartTimeInput`<sup>Optional</sup> <a name="scheduleStartTimeInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTimeInput"></a>

```typescript
public readonly scheduleStartTimeInput: number;
```

- *Type:* number

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffsetInput"></a>

```typescript
public readonly startTimeOffsetInput: number;
```

- *Type:* number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LogsScheduledQueryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>[]

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `logGroupIdentifiers`<sup>Required</sup> <a name="logGroupIdentifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiers"></a>

```typescript
public readonly logGroupIdentifiers: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryLanguage`<sup>Required</sup> <a name="queryLanguage" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguage"></a>

```typescript
public readonly queryLanguage: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `scheduleEndTime`<sup>Required</sup> <a name="scheduleEndTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTime"></a>

```typescript
public readonly scheduleEndTime: number;
```

- *Type:* number

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleStartTime`<sup>Required</sup> <a name="scheduleStartTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTime"></a>

```typescript
public readonly scheduleStartTime: number;
```

- *Type:* number

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsScheduledQueryConfig <a name="LogsScheduledQueryConfig" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

const logsScheduledQueryConfig: logsScheduledQuery.LogsScheduledQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#execution_role_arn LogsScheduledQuery#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#name LogsScheduledQuery#name}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryLanguage">queryLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#query_language LogsScheduledQuery#query_language}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryString">queryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#query_string LogsScheduledQuery#query_string}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#schedule_expression LogsScheduledQuery#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#description LogsScheduledQuery#description}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#destination_configuration LogsScheduledQuery#destination_configuration}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.logGroupIdentifiers">logGroupIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#log_group_identifiers LogsScheduledQuery#log_group_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleEndTime">scheduleEndTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#schedule_end_time LogsScheduledQuery#schedule_end_time}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleStartTime">scheduleStartTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#schedule_start_time LogsScheduledQuery#schedule_start_time}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.startTimeOffset">startTimeOffset</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#start_time_offset LogsScheduledQuery#start_time_offset}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#state LogsScheduledQuery#state}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#tags LogsScheduledQuery#tags}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#timezone LogsScheduledQuery#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#execution_role_arn LogsScheduledQuery#execution_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#name LogsScheduledQuery#name}.

---

##### `queryLanguage`<sup>Required</sup> <a name="queryLanguage" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryLanguage"></a>

```typescript
public readonly queryLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#query_language LogsScheduledQuery#query_language}.

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#query_string LogsScheduledQuery#query_string}.

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#schedule_expression LogsScheduledQuery#schedule_expression}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#description LogsScheduledQuery#description}.

---

##### `destinationConfiguration`<sup>Optional</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.destinationConfiguration"></a>

```typescript
public readonly destinationConfiguration: LogsScheduledQueryDestinationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#destination_configuration LogsScheduledQuery#destination_configuration}.

---

##### `logGroupIdentifiers`<sup>Optional</sup> <a name="logGroupIdentifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.logGroupIdentifiers"></a>

```typescript
public readonly logGroupIdentifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#log_group_identifiers LogsScheduledQuery#log_group_identifiers}.

---

##### `scheduleEndTime`<sup>Optional</sup> <a name="scheduleEndTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleEndTime"></a>

```typescript
public readonly scheduleEndTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#schedule_end_time LogsScheduledQuery#schedule_end_time}.

---

##### `scheduleStartTime`<sup>Optional</sup> <a name="scheduleStartTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleStartTime"></a>

```typescript
public readonly scheduleStartTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#schedule_start_time LogsScheduledQuery#schedule_start_time}.

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#start_time_offset LogsScheduledQuery#start_time_offset}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#state LogsScheduledQuery#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LogsScheduledQueryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#tags LogsScheduledQuery#tags}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#timezone LogsScheduledQuery#timezone}.

---

### LogsScheduledQueryDestinationConfiguration <a name="LogsScheduledQueryDestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

const logsScheduledQueryDestinationConfiguration: logsScheduledQuery.LogsScheduledQueryDestinationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#s3_configuration LogsScheduledQuery#s3_configuration}. |

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: LogsScheduledQueryDestinationConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#s3_configuration LogsScheduledQuery#s3_configuration}.

---

### LogsScheduledQueryDestinationConfigurationS3Configuration <a name="LogsScheduledQueryDestinationConfigurationS3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

const logsScheduledQueryDestinationConfigurationS3Configuration: logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.destinationIdentifier">destinationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#destination_identifier LogsScheduledQuery#destination_identifier}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#role_arn LogsScheduledQuery#role_arn}. |

---

##### `destinationIdentifier`<sup>Optional</sup> <a name="destinationIdentifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.destinationIdentifier"></a>

```typescript
public readonly destinationIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#destination_identifier LogsScheduledQuery#destination_identifier}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#role_arn LogsScheduledQuery#role_arn}.

---

### LogsScheduledQueryTags <a name="LogsScheduledQueryTags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

const logsScheduledQueryTags: logsScheduledQuery.LogsScheduledQueryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#key LogsScheduledQuery#key}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#value LogsScheduledQuery#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#key LogsScheduledQuery#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_scheduled_query#value LogsScheduledQuery#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogsScheduledQueryDestinationConfigurationOutputReference <a name="LogsScheduledQueryDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

new logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration"></a>

```typescript
public putS3Configuration(value: LogsScheduledQueryDestinationConfigurationS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

---

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resetS3Configuration"></a>

```typescript
public resetS3Configuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3ConfigurationInput"></a>

```typescript
public readonly s3ConfigurationInput: IResolvable | LogsScheduledQueryDestinationConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsScheduledQueryDestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

---


### LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference <a name="LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

new logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetDestinationIdentifier">resetDestinationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationIdentifier` <a name="resetDestinationIdentifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetDestinationIdentifier"></a>

```typescript
public resetDestinationIdentifier(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifierInput">destinationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifier">destinationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIdentifierInput`<sup>Optional</sup> <a name="destinationIdentifierInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifierInput"></a>

```typescript
public readonly destinationIdentifierInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `destinationIdentifier`<sup>Required</sup> <a name="destinationIdentifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifier"></a>

```typescript
public readonly destinationIdentifier: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsScheduledQueryDestinationConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

---


### LogsScheduledQueryTagsList <a name="LogsScheduledQueryTagsList" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

new logsScheduledQuery.LogsScheduledQueryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get"></a>

```typescript
public get(index: number): LogsScheduledQueryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsScheduledQueryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>[]

---


### LogsScheduledQueryTagsOutputReference <a name="LogsScheduledQueryTagsOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer"></a>

```typescript
import { logsScheduledQuery } from '@cdktn/provider-awscc'

new logsScheduledQuery.LogsScheduledQueryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsScheduledQueryTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>

---



