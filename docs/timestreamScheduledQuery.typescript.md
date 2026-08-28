# `timestreamScheduledQuery` Submodule <a name="`timestreamScheduledQuery` Submodule" id="@cdktn/provider-awscc.timestreamScheduledQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamScheduledQuery <a name="TimestreamScheduledQuery" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query awscc_timestream_scheduled_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQuery(scope: Construct, id: string, config: TimestreamScheduledQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig">TimestreamScheduledQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig">TimestreamScheduledQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putErrorReportConfiguration">putErrorReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putNotificationConfiguration">putNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putScheduleConfiguration">putScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTargetConfiguration">putTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetScheduledQueryName">resetScheduledQueryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetTargetConfiguration">resetTargetConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorReportConfiguration` <a name="putErrorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putErrorReportConfiguration"></a>

```typescript
public putErrorReportConfiguration(value: TimestreamScheduledQueryErrorReportConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putErrorReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

---

##### `putNotificationConfiguration` <a name="putNotificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putNotificationConfiguration"></a>

```typescript
public putNotificationConfiguration(value: TimestreamScheduledQueryNotificationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

---

##### `putScheduleConfiguration` <a name="putScheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putScheduleConfiguration"></a>

```typescript
public putScheduleConfiguration(value: TimestreamScheduledQueryScheduleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTags"></a>

```typescript
public putTags(value: IResolvable | TimestreamScheduledQueryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>[]

---

##### `putTargetConfiguration` <a name="putTargetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTargetConfiguration"></a>

```typescript
public putTargetConfiguration(value: TimestreamScheduledQueryTargetConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTargetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetScheduledQueryName` <a name="resetScheduledQueryName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetScheduledQueryName"></a>

```typescript
public resetScheduledQueryName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetConfiguration` <a name="resetTargetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetTargetConfiguration"></a>

```typescript
public resetTargetConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamScheduledQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isConstruct"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

timestreamScheduledQuery.TimestreamScheduledQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformElement"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformResource"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TimestreamScheduledQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TimestreamScheduledQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TimestreamScheduledQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamScheduledQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.errorReportConfiguration">errorReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference">TimestreamScheduledQueryErrorReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference">TimestreamScheduledQueryNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference">TimestreamScheduledQueryScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqErrorReportConfiguration">sqErrorReportConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqKmsKeyId">sqKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqName">sqName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqNotificationConfiguration">sqNotificationConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqQueryString">sqQueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqScheduleConfiguration">sqScheduleConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqScheduledQueryExecutionRoleArn">sqScheduledQueryExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqTargetConfiguration">sqTargetConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList">TimestreamScheduledQueryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference">TimestreamScheduledQueryTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.errorReportConfigurationInput">errorReportConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.notificationConfigurationInput">notificationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduleConfigurationInput">scheduleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryExecutionRoleArnInput">scheduledQueryExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryNameInput">scheduledQueryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.targetConfigurationInput">targetConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryExecutionRoleArn">scheduledQueryExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryName">scheduledQueryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `errorReportConfiguration`<sup>Required</sup> <a name="errorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.errorReportConfiguration"></a>

```typescript
public readonly errorReportConfiguration: TimestreamScheduledQueryErrorReportConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference">TimestreamScheduledQueryErrorReportConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: TimestreamScheduledQueryNotificationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference">TimestreamScheduledQueryNotificationConfigurationOutputReference</a>

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduleConfiguration"></a>

```typescript
public readonly scheduleConfiguration: TimestreamScheduledQueryScheduleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference">TimestreamScheduledQueryScheduleConfigurationOutputReference</a>

---

##### `sqErrorReportConfiguration`<sup>Required</sup> <a name="sqErrorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqErrorReportConfiguration"></a>

```typescript
public readonly sqErrorReportConfiguration: string;
```

- *Type:* string

---

##### `sqKmsKeyId`<sup>Required</sup> <a name="sqKmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqKmsKeyId"></a>

```typescript
public readonly sqKmsKeyId: string;
```

- *Type:* string

---

##### `sqName`<sup>Required</sup> <a name="sqName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqName"></a>

```typescript
public readonly sqName: string;
```

- *Type:* string

---

##### `sqNotificationConfiguration`<sup>Required</sup> <a name="sqNotificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqNotificationConfiguration"></a>

```typescript
public readonly sqNotificationConfiguration: string;
```

- *Type:* string

---

##### `sqQueryString`<sup>Required</sup> <a name="sqQueryString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqQueryString"></a>

```typescript
public readonly sqQueryString: string;
```

- *Type:* string

---

##### `sqScheduleConfiguration`<sup>Required</sup> <a name="sqScheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqScheduleConfiguration"></a>

```typescript
public readonly sqScheduleConfiguration: string;
```

- *Type:* string

---

##### `sqScheduledQueryExecutionRoleArn`<sup>Required</sup> <a name="sqScheduledQueryExecutionRoleArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqScheduledQueryExecutionRoleArn"></a>

```typescript
public readonly sqScheduledQueryExecutionRoleArn: string;
```

- *Type:* string

---

##### `sqTargetConfiguration`<sup>Required</sup> <a name="sqTargetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqTargetConfiguration"></a>

```typescript
public readonly sqTargetConfiguration: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tags"></a>

```typescript
public readonly tags: TimestreamScheduledQueryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList">TimestreamScheduledQueryTagsList</a>

---

##### `targetConfiguration`<sup>Required</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.targetConfiguration"></a>

```typescript
public readonly targetConfiguration: TimestreamScheduledQueryTargetConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference">TimestreamScheduledQueryTargetConfigurationOutputReference</a>

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `errorReportConfigurationInput`<sup>Optional</sup> <a name="errorReportConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.errorReportConfigurationInput"></a>

```typescript
public readonly errorReportConfigurationInput: IResolvable | TimestreamScheduledQueryErrorReportConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `notificationConfigurationInput`<sup>Optional</sup> <a name="notificationConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.notificationConfigurationInput"></a>

```typescript
public readonly notificationConfigurationInput: IResolvable | TimestreamScheduledQueryNotificationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `scheduleConfigurationInput`<sup>Optional</sup> <a name="scheduleConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduleConfigurationInput"></a>

```typescript
public readonly scheduleConfigurationInput: IResolvable | TimestreamScheduledQueryScheduleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

---

##### `scheduledQueryExecutionRoleArnInput`<sup>Optional</sup> <a name="scheduledQueryExecutionRoleArnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryExecutionRoleArnInput"></a>

```typescript
public readonly scheduledQueryExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `scheduledQueryNameInput`<sup>Optional</sup> <a name="scheduledQueryNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryNameInput"></a>

```typescript
public readonly scheduledQueryNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TimestreamScheduledQueryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>[]

---

##### `targetConfigurationInput`<sup>Optional</sup> <a name="targetConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.targetConfigurationInput"></a>

```typescript
public readonly targetConfigurationInput: IResolvable | TimestreamScheduledQueryTargetConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `scheduledQueryExecutionRoleArn`<sup>Required</sup> <a name="scheduledQueryExecutionRoleArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryExecutionRoleArn"></a>

```typescript
public readonly scheduledQueryExecutionRoleArn: string;
```

- *Type:* string

---

##### `scheduledQueryName`<sup>Required</sup> <a name="scheduledQueryName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryName"></a>

```typescript
public readonly scheduledQueryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamScheduledQueryConfig <a name="TimestreamScheduledQueryConfig" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryConfig: timestreamScheduledQuery.TimestreamScheduledQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.errorReportConfiguration">errorReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a></code> | Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a></code> | Notification configuration for the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.queryString">queryString</a></code> | <code>string</code> | The query string to run. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a></code> | Configuration for when the scheduled query is executed. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduledQueryExecutionRoleArn">scheduledQueryExecutionRoleArn</a></code> | <code>string</code> | The ARN for the IAM role that Timestream will assume when running the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.clientToken">clientToken</a></code> | <code>string</code> | Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The Amazon KMS key used to encrypt the scheduled query resource, at-rest. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduledQueryName">scheduledQueryName</a></code> | <code>string</code> | The name of the scheduled query. Scheduled query names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>[]</code> | A list of key-value pairs to label the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a></code> | Configuration of target store where scheduled query results are written to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `errorReportConfiguration`<sup>Required</sup> <a name="errorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.errorReportConfiguration"></a>

```typescript
public readonly errorReportConfiguration: TimestreamScheduledQueryErrorReportConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#error_report_configuration TimestreamScheduledQuery#error_report_configuration}

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: TimestreamScheduledQueryNotificationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

Notification configuration for the scheduled query.

A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#notification_configuration TimestreamScheduledQuery#notification_configuration}

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

The query string to run.

Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduleConfiguration"></a>

```typescript
public readonly scheduleConfiguration: TimestreamScheduledQueryScheduleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

Configuration for when the scheduled query is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#schedule_configuration TimestreamScheduledQuery#schedule_configuration}

---

##### `scheduledQueryExecutionRoleArn`<sup>Required</sup> <a name="scheduledQueryExecutionRoleArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduledQueryExecutionRoleArn"></a>

```typescript
public readonly scheduledQueryExecutionRoleArn: string;
```

- *Type:* string

The ARN for the IAM role that Timestream will assume when running the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#scheduled_query_execution_role_arn TimestreamScheduledQuery#scheduled_query_execution_role_arn}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result.

Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf. After 8 hours, any request with the same ClientToken is treated as a new request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#client_token TimestreamScheduledQuery#client_token}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The Amazon KMS key used to encrypt the scheduled query resource, at-rest.

If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#kms_key_id TimestreamScheduledQuery#kms_key_id}

---

##### `scheduledQueryName`<sup>Optional</sup> <a name="scheduledQueryName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduledQueryName"></a>

```typescript
public readonly scheduledQueryName: string;
```

- *Type:* string

The name of the scheduled query. Scheduled query names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#scheduled_query_name TimestreamScheduledQuery#scheduled_query_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TimestreamScheduledQueryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>[]

A list of key-value pairs to label the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#tags TimestreamScheduledQuery#tags}

---

##### `targetConfiguration`<sup>Optional</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.targetConfiguration"></a>

```typescript
public readonly targetConfiguration: TimestreamScheduledQueryTargetConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

Configuration of target store where scheduled query results are written to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#target_configuration TimestreamScheduledQuery#target_configuration}

---

### TimestreamScheduledQueryErrorReportConfiguration <a name="TimestreamScheduledQueryErrorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryErrorReportConfiguration: timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a></code> | Details on S3 location for error reports that result from running a query. |

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: TimestreamScheduledQueryErrorReportConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a>

Details on S3 location for error reports that result from running a query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#s3_configuration TimestreamScheduledQuery#s3_configuration}

---

### TimestreamScheduledQueryErrorReportConfigurationS3Configuration <a name="TimestreamScheduledQueryErrorReportConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryErrorReportConfigurationS3Configuration: timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>string</code> | Name of the S3 bucket under which error reports will be created. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | Encryption at rest options for the error reports. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>string</code> | Prefix for error report keys. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Name of the S3 bucket under which error reports will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#bucket_name TimestreamScheduledQuery#bucket_name}

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

Encryption at rest options for the error reports.

If no encryption option is specified, Timestream will choose SSE_S3 as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#encryption_option TimestreamScheduledQuery#encryption_option}

---

##### `objectKeyPrefix`<sup>Optional</sup> <a name="objectKeyPrefix" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.objectKeyPrefix"></a>

```typescript
public readonly objectKeyPrefix: string;
```

- *Type:* string

Prefix for error report keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#object_key_prefix TimestreamScheduledQuery#object_key_prefix}

---

### TimestreamScheduledQueryNotificationConfiguration <a name="TimestreamScheduledQueryNotificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryNotificationConfiguration: timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a></code> | SNS configuration for notification upon scheduled query execution. |

---

##### `snsConfiguration`<sup>Required</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration.property.snsConfiguration"></a>

```typescript
public readonly snsConfiguration: TimestreamScheduledQueryNotificationConfigurationSnsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a>

SNS configuration for notification upon scheduled query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#sns_configuration TimestreamScheduledQuery#sns_configuration}

---

### TimestreamScheduledQueryNotificationConfigurationSnsConfiguration <a name="TimestreamScheduledQueryNotificationConfigurationSnsConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryNotificationConfigurationSnsConfiguration: timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration.property.topicArn">topicArn</a></code> | <code>string</code> | SNS topic ARN that the scheduled query status notifications will be sent to. |

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

SNS topic ARN that the scheduled query status notifications will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#topic_arn TimestreamScheduledQuery#topic_arn}

---

### TimestreamScheduledQueryScheduleConfiguration <a name="TimestreamScheduledQueryScheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryScheduleConfiguration: timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | An expression that denotes when to trigger the scheduled query run. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

An expression that denotes when to trigger the scheduled query run.

This can be a cron expression or a rate expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#schedule_expression TimestreamScheduledQuery#schedule_expression}

---

### TimestreamScheduledQueryTags <a name="TimestreamScheduledQueryTags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryTags: timestreamScheduledQuery.TimestreamScheduledQueryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#key TimestreamScheduledQuery#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#value TimestreamScheduledQuery#value}

---

### TimestreamScheduledQueryTargetConfiguration <a name="TimestreamScheduledQueryTargetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryTargetConfiguration: timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration.property.timestreamConfiguration">timestreamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a></code> | Configuration needed to write data into the Timestream database and table. |

---

##### `timestreamConfiguration`<sup>Optional</sup> <a name="timestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration.property.timestreamConfiguration"></a>

```typescript
public readonly timestreamConfiguration: TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a>

Configuration needed to write data into the Timestream database and table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#timestream_configuration TimestreamScheduledQuery#timestream_configuration}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryTargetConfigurationTimestreamConfiguration: timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.databaseName">databaseName</a></code> | <code>string</code> | Name of Timestream database to which the query result will be written. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.dimensionMappings">dimensionMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>[]</code> | This is to allow mapping column(s) from the query result to the dimension in the destination table. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.measureNameColumn">measureNameColumn</a></code> | <code>string</code> | Name of the measure name column from the query result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.mixedMeasureMappings">mixedMeasureMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>[]</code> | Specifies how to map measures to multi-measure records. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.multiMeasureMappings">multiMeasureMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a></code> | Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.tableName">tableName</a></code> | <code>string</code> | Name of Timestream table that the query result will be written to. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.timeColumn">timeColumn</a></code> | <code>string</code> | Column from query result that should be used as the time column in destination table. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Name of Timestream database to which the query result will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#database_name TimestreamScheduledQuery#database_name}

---

##### `dimensionMappings`<sup>Optional</sup> <a name="dimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.dimensionMappings"></a>

```typescript
public readonly dimensionMappings: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>[]

This is to allow mapping column(s) from the query result to the dimension in the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#dimension_mappings TimestreamScheduledQuery#dimension_mappings}

---

##### `measureNameColumn`<sup>Optional</sup> <a name="measureNameColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.measureNameColumn"></a>

```typescript
public readonly measureNameColumn: string;
```

- *Type:* string

Name of the measure name column from the query result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#measure_name_column TimestreamScheduledQuery#measure_name_column}

---

##### `mixedMeasureMappings`<sup>Optional</sup> <a name="mixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.mixedMeasureMappings"></a>

```typescript
public readonly mixedMeasureMappings: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>[]

Specifies how to map measures to multi-measure records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#mixed_measure_mappings TimestreamScheduledQuery#mixed_measure_mappings}

---

##### `multiMeasureMappings`<sup>Optional</sup> <a name="multiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.multiMeasureMappings"></a>

```typescript
public readonly multiMeasureMappings: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a>

Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided.

MultiMeasureMappings can be used to ingest data as multi measures in the derived table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#multi_measure_mappings TimestreamScheduledQuery#multi_measure_mappings}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Name of Timestream table that the query result will be written to.

The table should be within the same database that is provided in Timestream configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#table_name TimestreamScheduledQuery#table_name}

---

##### `timeColumn`<sup>Optional</sup> <a name="timeColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.timeColumn"></a>

```typescript
public readonly timeColumn: string;
```

- *Type:* string

Column from query result that should be used as the time column in destination table.

Column type for this should be TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#time_column TimestreamScheduledQuery#time_column}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings: timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.property.dimensionValueType">dimensionValueType</a></code> | <code>string</code> | Type for the dimension. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.property.name">name</a></code> | <code>string</code> | Column name from query result. |

---

##### `dimensionValueType`<sup>Optional</sup> <a name="dimensionValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.property.dimensionValueType"></a>

```typescript
public readonly dimensionValueType: string;
```

- *Type:* string

Type for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#dimension_value_type TimestreamScheduledQuery#dimension_value_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Column name from query result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#name TimestreamScheduledQuery#name}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings: timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.measureName">measureName</a></code> | <code>string</code> | Refers to the value of the measure name in a result row. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.measureValueType">measureValueType</a></code> | <code>string</code> | Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.multiMeasureAttributeMappings">multiMeasureAttributeMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>[]</code> | Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.sourceColumn">sourceColumn</a></code> | <code>string</code> | This field refers to the source column from which the measure value is to be read for result materialization. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.targetMeasureName">targetMeasureName</a></code> | <code>string</code> | Target measure name to be used. |

---

##### `measureName`<sup>Optional</sup> <a name="measureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.measureName"></a>

```typescript
public readonly measureName: string;
```

- *Type:* string

Refers to the value of the measure name in a result row.

This field is required if MeasureNameColumn is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#measure_name TimestreamScheduledQuery#measure_name}

---

##### `measureValueType`<sup>Optional</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.measureValueType"></a>

```typescript
public readonly measureValueType: string;
```

- *Type:* string

Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}

---

##### `multiMeasureAttributeMappings`<sup>Optional</sup> <a name="multiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.multiMeasureAttributeMappings"></a>

```typescript
public readonly multiMeasureAttributeMappings: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>[]

Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#multi_measure_attribute_mappings TimestreamScheduledQuery#multi_measure_attribute_mappings}

---

##### `sourceColumn`<sup>Optional</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.sourceColumn"></a>

```typescript
public readonly sourceColumn: string;
```

- *Type:* string

This field refers to the source column from which the measure value is to be read for result materialization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}

---

##### `targetMeasureName`<sup>Optional</sup> <a name="targetMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.targetMeasureName"></a>

```typescript
public readonly targetMeasureName: string;
```

- *Type:* string

Target measure name to be used.

If not provided, the target measure name by default would be MeasureName if provided, or SourceColumn otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#target_measure_name TimestreamScheduledQuery#target_measure_name}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings: timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.measureValueType">measureValueType</a></code> | <code>string</code> | Value type of the measure value column to be read from the query result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.sourceColumn">sourceColumn</a></code> | <code>string</code> | Source measure value column in the query result where the attribute value is to be read. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.targetMultiMeasureAttributeName">targetMultiMeasureAttributeName</a></code> | <code>string</code> | Custom name to be used for attribute name in derived table. |

---

##### `measureValueType`<sup>Optional</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.measureValueType"></a>

```typescript
public readonly measureValueType: string;
```

- *Type:* string

Value type of the measure value column to be read from the query result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}

---

##### `sourceColumn`<sup>Optional</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.sourceColumn"></a>

```typescript
public readonly sourceColumn: string;
```

- *Type:* string

Source measure value column in the query result where the attribute value is to be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}

---

##### `targetMultiMeasureAttributeName`<sup>Optional</sup> <a name="targetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.targetMultiMeasureAttributeName"></a>

```typescript
public readonly targetMultiMeasureAttributeName: string;
```

- *Type:* string

Custom name to be used for attribute name in derived table.

If not provided, source column name would be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#target_multi_measure_attribute_name TimestreamScheduledQuery#target_multi_measure_attribute_name}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings: timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.property.multiMeasureAttributeMappings">multiMeasureAttributeMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>[]</code> | Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.property.targetMultiMeasureName">targetMultiMeasureName</a></code> | <code>string</code> | Name of the target multi-measure in the derived table. |

---

##### `multiMeasureAttributeMappings`<sup>Optional</sup> <a name="multiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.property.multiMeasureAttributeMappings"></a>

```typescript
public readonly multiMeasureAttributeMappings: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>[]

Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#multi_measure_attribute_mappings TimestreamScheduledQuery#multi_measure_attribute_mappings}

---

##### `targetMultiMeasureName`<sup>Optional</sup> <a name="targetMultiMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.property.targetMultiMeasureName"></a>

```typescript
public readonly targetMultiMeasureName: string;
```

- *Type:* string

Name of the target multi-measure in the derived table.

Required if MeasureNameColumn is not provided. If MeasureNameColumn is provided then the value from that column will be used as the multi-measure name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#target_multi_measure_name TimestreamScheduledQuery#target_multi_measure_name}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

const timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings: timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.measureValueType">measureValueType</a></code> | <code>string</code> | Value type of the measure value column to be read from the query result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.sourceColumn">sourceColumn</a></code> | <code>string</code> | Source measure value column in the query result where the attribute value is to be read. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.targetMultiMeasureAttributeName">targetMultiMeasureAttributeName</a></code> | <code>string</code> | Custom name to be used for attribute name in derived table. |

---

##### `measureValueType`<sup>Optional</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.measureValueType"></a>

```typescript
public readonly measureValueType: string;
```

- *Type:* string

Value type of the measure value column to be read from the query result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}

---

##### `sourceColumn`<sup>Optional</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.sourceColumn"></a>

```typescript
public readonly sourceColumn: string;
```

- *Type:* string

Source measure value column in the query result where the attribute value is to be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}

---

##### `targetMultiMeasureAttributeName`<sup>Optional</sup> <a name="targetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.targetMultiMeasureAttributeName"></a>

```typescript
public readonly targetMultiMeasureAttributeName: string;
```

- *Type:* string

Custom name to be used for attribute name in derived table.

If not provided, source column name would be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_scheduled_query#target_multi_measure_attribute_name TimestreamScheduledQuery#target_multi_measure_attribute_name}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamScheduledQueryErrorReportConfigurationOutputReference <a name="TimestreamScheduledQueryErrorReportConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.putS3Configuration"></a>

```typescript
public putS3Configuration(value: TimestreamScheduledQueryErrorReportConfigurationS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference">TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference">TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.s3ConfigurationInput"></a>

```typescript
public readonly s3ConfigurationInput: IResolvable | TimestreamScheduledQueryErrorReportConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryErrorReportConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

---


### TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference <a name="TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resetObjectKeyPrefix">resetObjectKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resetEncryptionOption"></a>

```typescript
public resetEncryptionOption(): void
```

##### `resetObjectKeyPrefix` <a name="resetObjectKeyPrefix" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resetObjectKeyPrefix"></a>

```typescript
public resetObjectKeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.objectKeyPrefixInput">objectKeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.encryptionOptionInput"></a>

```typescript
public readonly encryptionOptionInput: string;
```

- *Type:* string

---

##### `objectKeyPrefixInput`<sup>Optional</sup> <a name="objectKeyPrefixInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.objectKeyPrefixInput"></a>

```typescript
public readonly objectKeyPrefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

---

##### `objectKeyPrefix`<sup>Required</sup> <a name="objectKeyPrefix" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.objectKeyPrefix"></a>

```typescript
public readonly objectKeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryErrorReportConfigurationS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a>

---


### TimestreamScheduledQueryNotificationConfigurationOutputReference <a name="TimestreamScheduledQueryNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.putSnsConfiguration">putSnsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSnsConfiguration` <a name="putSnsConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.putSnsConfiguration"></a>

```typescript
public putSnsConfiguration(value: TimestreamScheduledQueryNotificationConfigurationSnsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.putSnsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference">TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.snsConfigurationInput">snsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snsConfiguration`<sup>Required</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.snsConfiguration"></a>

```typescript
public readonly snsConfiguration: TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference">TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference</a>

---

##### `snsConfigurationInput`<sup>Optional</sup> <a name="snsConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.snsConfigurationInput"></a>

```typescript
public readonly snsConfigurationInput: IResolvable | TimestreamScheduledQueryNotificationConfigurationSnsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryNotificationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

---


### TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference <a name="TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryNotificationConfigurationSnsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a>

---


### TimestreamScheduledQueryScheduleConfigurationOutputReference <a name="TimestreamScheduledQueryScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryScheduleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

---


### TimestreamScheduledQueryTagsList <a name="TimestreamScheduledQueryTagsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.get"></a>

```typescript
public get(index: number): TimestreamScheduledQueryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>[]

---


### TimestreamScheduledQueryTagsOutputReference <a name="TimestreamScheduledQueryTagsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>

---


### TimestreamScheduledQueryTargetConfigurationOutputReference <a name="TimestreamScheduledQueryTargetConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.putTimestreamConfiguration">putTimestreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resetTimestreamConfiguration">resetTimestreamConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimestreamConfiguration` <a name="putTimestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.putTimestreamConfiguration"></a>

```typescript
public putTimestreamConfiguration(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.putTimestreamConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a>

---

##### `resetTimestreamConfiguration` <a name="resetTimestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resetTimestreamConfiguration"></a>

```typescript
public resetTimestreamConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.timestreamConfiguration">timestreamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.timestreamConfigurationInput">timestreamConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestreamConfiguration`<sup>Required</sup> <a name="timestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.timestreamConfiguration"></a>

```typescript
public readonly timestreamConfiguration: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference</a>

---

##### `timestreamConfigurationInput`<sup>Optional</sup> <a name="timestreamConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.timestreamConfigurationInput"></a>

```typescript
public readonly timestreamConfigurationInput: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.get"></a>

```typescript
public get(index: number): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>[]

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resetDimensionValueType">resetDimensionValueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionValueType` <a name="resetDimensionValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resetDimensionValueType"></a>

```typescript
public resetDimensionValueType(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.dimensionValueTypeInput">dimensionValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.dimensionValueType">dimensionValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionValueTypeInput`<sup>Optional</sup> <a name="dimensionValueTypeInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.dimensionValueTypeInput"></a>

```typescript
public readonly dimensionValueTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dimensionValueType`<sup>Required</sup> <a name="dimensionValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.dimensionValueType"></a>

```typescript
public readonly dimensionValueType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.get"></a>

```typescript
public get(index: number): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>[]

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.get"></a>

```typescript
public get(index: number): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>[]

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetMeasureValueType">resetMeasureValueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetSourceColumn">resetSourceColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetTargetMultiMeasureAttributeName">resetTargetMultiMeasureAttributeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMeasureValueType` <a name="resetMeasureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetMeasureValueType"></a>

```typescript
public resetMeasureValueType(): void
```

##### `resetSourceColumn` <a name="resetSourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetSourceColumn"></a>

```typescript
public resetSourceColumn(): void
```

##### `resetTargetMultiMeasureAttributeName` <a name="resetTargetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetTargetMultiMeasureAttributeName"></a>

```typescript
public resetTargetMultiMeasureAttributeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueTypeInput">measureValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumnInput">sourceColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeNameInput">targetMultiMeasureAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueType">measureValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumn">sourceColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeName">targetMultiMeasureAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `measureValueTypeInput`<sup>Optional</sup> <a name="measureValueTypeInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueTypeInput"></a>

```typescript
public readonly measureValueTypeInput: string;
```

- *Type:* string

---

##### `sourceColumnInput`<sup>Optional</sup> <a name="sourceColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumnInput"></a>

```typescript
public readonly sourceColumnInput: string;
```

- *Type:* string

---

##### `targetMultiMeasureAttributeNameInput`<sup>Optional</sup> <a name="targetMultiMeasureAttributeNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeNameInput"></a>

```typescript
public readonly targetMultiMeasureAttributeNameInput: string;
```

- *Type:* string

---

##### `measureValueType`<sup>Required</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueType"></a>

```typescript
public readonly measureValueType: string;
```

- *Type:* string

---

##### `sourceColumn`<sup>Required</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumn"></a>

```typescript
public readonly sourceColumn: string;
```

- *Type:* string

---

##### `targetMultiMeasureAttributeName`<sup>Required</sup> <a name="targetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeName"></a>

```typescript
public readonly targetMultiMeasureAttributeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.putMultiMeasureAttributeMappings">putMultiMeasureAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMeasureName">resetMeasureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMeasureValueType">resetMeasureValueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMultiMeasureAttributeMappings">resetMultiMeasureAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetSourceColumn">resetSourceColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetTargetMeasureName">resetTargetMeasureName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiMeasureAttributeMappings` <a name="putMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.putMultiMeasureAttributeMappings"></a>

```typescript
public putMultiMeasureAttributeMappings(value: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.putMultiMeasureAttributeMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>[]

---

##### `resetMeasureName` <a name="resetMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMeasureName"></a>

```typescript
public resetMeasureName(): void
```

##### `resetMeasureValueType` <a name="resetMeasureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMeasureValueType"></a>

```typescript
public resetMeasureValueType(): void
```

##### `resetMultiMeasureAttributeMappings` <a name="resetMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMultiMeasureAttributeMappings"></a>

```typescript
public resetMultiMeasureAttributeMappings(): void
```

##### `resetSourceColumn` <a name="resetSourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetSourceColumn"></a>

```typescript
public resetSourceColumn(): void
```

##### `resetTargetMeasureName` <a name="resetTargetMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetTargetMeasureName"></a>

```typescript
public resetTargetMeasureName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.multiMeasureAttributeMappings">multiMeasureAttributeMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureNameInput">measureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureValueTypeInput">measureValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.multiMeasureAttributeMappingsInput">multiMeasureAttributeMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.sourceColumnInput">sourceColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.targetMeasureNameInput">targetMeasureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureName">measureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureValueType">measureValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.sourceColumn">sourceColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.targetMeasureName">targetMeasureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiMeasureAttributeMappings`<sup>Required</sup> <a name="multiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.multiMeasureAttributeMappings"></a>

```typescript
public readonly multiMeasureAttributeMappings: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList</a>

---

##### `measureNameInput`<sup>Optional</sup> <a name="measureNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureNameInput"></a>

```typescript
public readonly measureNameInput: string;
```

- *Type:* string

---

##### `measureValueTypeInput`<sup>Optional</sup> <a name="measureValueTypeInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureValueTypeInput"></a>

```typescript
public readonly measureValueTypeInput: string;
```

- *Type:* string

---

##### `multiMeasureAttributeMappingsInput`<sup>Optional</sup> <a name="multiMeasureAttributeMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.multiMeasureAttributeMappingsInput"></a>

```typescript
public readonly multiMeasureAttributeMappingsInput: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>[]

---

##### `sourceColumnInput`<sup>Optional</sup> <a name="sourceColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.sourceColumnInput"></a>

```typescript
public readonly sourceColumnInput: string;
```

- *Type:* string

---

##### `targetMeasureNameInput`<sup>Optional</sup> <a name="targetMeasureNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.targetMeasureNameInput"></a>

```typescript
public readonly targetMeasureNameInput: string;
```

- *Type:* string

---

##### `measureName`<sup>Required</sup> <a name="measureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureName"></a>

```typescript
public readonly measureName: string;
```

- *Type:* string

---

##### `measureValueType`<sup>Required</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureValueType"></a>

```typescript
public readonly measureValueType: string;
```

- *Type:* string

---

##### `sourceColumn`<sup>Required</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.sourceColumn"></a>

```typescript
public readonly sourceColumn: string;
```

- *Type:* string

---

##### `targetMeasureName`<sup>Required</sup> <a name="targetMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.targetMeasureName"></a>

```typescript
public readonly targetMeasureName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.get"></a>

```typescript
public get(index: number): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>[]

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetMeasureValueType">resetMeasureValueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetSourceColumn">resetSourceColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetTargetMultiMeasureAttributeName">resetTargetMultiMeasureAttributeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMeasureValueType` <a name="resetMeasureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetMeasureValueType"></a>

```typescript
public resetMeasureValueType(): void
```

##### `resetSourceColumn` <a name="resetSourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetSourceColumn"></a>

```typescript
public resetSourceColumn(): void
```

##### `resetTargetMultiMeasureAttributeName` <a name="resetTargetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetTargetMultiMeasureAttributeName"></a>

```typescript
public resetTargetMultiMeasureAttributeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueTypeInput">measureValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumnInput">sourceColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeNameInput">targetMultiMeasureAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueType">measureValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumn">sourceColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeName">targetMultiMeasureAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `measureValueTypeInput`<sup>Optional</sup> <a name="measureValueTypeInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueTypeInput"></a>

```typescript
public readonly measureValueTypeInput: string;
```

- *Type:* string

---

##### `sourceColumnInput`<sup>Optional</sup> <a name="sourceColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumnInput"></a>

```typescript
public readonly sourceColumnInput: string;
```

- *Type:* string

---

##### `targetMultiMeasureAttributeNameInput`<sup>Optional</sup> <a name="targetMultiMeasureAttributeNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeNameInput"></a>

```typescript
public readonly targetMultiMeasureAttributeNameInput: string;
```

- *Type:* string

---

##### `measureValueType`<sup>Required</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueType"></a>

```typescript
public readonly measureValueType: string;
```

- *Type:* string

---

##### `sourceColumn`<sup>Required</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumn"></a>

```typescript
public readonly sourceColumn: string;
```

- *Type:* string

---

##### `targetMultiMeasureAttributeName`<sup>Required</sup> <a name="targetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeName"></a>

```typescript
public readonly targetMultiMeasureAttributeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.putMultiMeasureAttributeMappings">putMultiMeasureAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resetMultiMeasureAttributeMappings">resetMultiMeasureAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resetTargetMultiMeasureName">resetTargetMultiMeasureName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiMeasureAttributeMappings` <a name="putMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.putMultiMeasureAttributeMappings"></a>

```typescript
public putMultiMeasureAttributeMappings(value: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.putMultiMeasureAttributeMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>[]

---

##### `resetMultiMeasureAttributeMappings` <a name="resetMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resetMultiMeasureAttributeMappings"></a>

```typescript
public resetMultiMeasureAttributeMappings(): void
```

##### `resetTargetMultiMeasureName` <a name="resetTargetMultiMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resetTargetMultiMeasureName"></a>

```typescript
public resetTargetMultiMeasureName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.multiMeasureAttributeMappings">multiMeasureAttributeMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.multiMeasureAttributeMappingsInput">multiMeasureAttributeMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.targetMultiMeasureNameInput">targetMultiMeasureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.targetMultiMeasureName">targetMultiMeasureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiMeasureAttributeMappings`<sup>Required</sup> <a name="multiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.multiMeasureAttributeMappings"></a>

```typescript
public readonly multiMeasureAttributeMappings: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList</a>

---

##### `multiMeasureAttributeMappingsInput`<sup>Optional</sup> <a name="multiMeasureAttributeMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.multiMeasureAttributeMappingsInput"></a>

```typescript
public readonly multiMeasureAttributeMappingsInput: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>[]

---

##### `targetMultiMeasureNameInput`<sup>Optional</sup> <a name="targetMultiMeasureNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.targetMultiMeasureNameInput"></a>

```typescript
public readonly targetMultiMeasureNameInput: string;
```

- *Type:* string

---

##### `targetMultiMeasureName`<sup>Required</sup> <a name="targetMultiMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.targetMultiMeasureName"></a>

```typescript
public readonly targetMultiMeasureName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamScheduledQuery } from '@cdktn/provider-awscc'

new timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putDimensionMappings">putDimensionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMixedMeasureMappings">putMixedMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMultiMeasureMappings">putMultiMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetDimensionMappings">resetDimensionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMeasureNameColumn">resetMeasureNameColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMixedMeasureMappings">resetMixedMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMultiMeasureMappings">resetMultiMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetTimeColumn">resetTimeColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensionMappings` <a name="putDimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putDimensionMappings"></a>

```typescript
public putDimensionMappings(value: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putDimensionMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>[]

---

##### `putMixedMeasureMappings` <a name="putMixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMixedMeasureMappings"></a>

```typescript
public putMixedMeasureMappings(value: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMixedMeasureMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>[]

---

##### `putMultiMeasureMappings` <a name="putMultiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMultiMeasureMappings"></a>

```typescript
public putMultiMeasureMappings(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMultiMeasureMappings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a>

---

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetDimensionMappings` <a name="resetDimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetDimensionMappings"></a>

```typescript
public resetDimensionMappings(): void
```

##### `resetMeasureNameColumn` <a name="resetMeasureNameColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMeasureNameColumn"></a>

```typescript
public resetMeasureNameColumn(): void
```

##### `resetMixedMeasureMappings` <a name="resetMixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMixedMeasureMappings"></a>

```typescript
public resetMixedMeasureMappings(): void
```

##### `resetMultiMeasureMappings` <a name="resetMultiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMultiMeasureMappings"></a>

```typescript
public resetMultiMeasureMappings(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTimeColumn` <a name="resetTimeColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetTimeColumn"></a>

```typescript
public resetTimeColumn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.dimensionMappings">dimensionMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.mixedMeasureMappings">mixedMeasureMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.multiMeasureMappings">multiMeasureMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.dimensionMappingsInput">dimensionMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.measureNameColumnInput">measureNameColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.mixedMeasureMappingsInput">mixedMeasureMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.multiMeasureMappingsInput">multiMeasureMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.timeColumnInput">timeColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.measureNameColumn">measureNameColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.timeColumn">timeColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionMappings`<sup>Required</sup> <a name="dimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.dimensionMappings"></a>

```typescript
public readonly dimensionMappings: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList</a>

---

##### `mixedMeasureMappings`<sup>Required</sup> <a name="mixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.mixedMeasureMappings"></a>

```typescript
public readonly mixedMeasureMappings: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList</a>

---

##### `multiMeasureMappings`<sup>Required</sup> <a name="multiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.multiMeasureMappings"></a>

```typescript
public readonly multiMeasureMappings: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `dimensionMappingsInput`<sup>Optional</sup> <a name="dimensionMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.dimensionMappingsInput"></a>

```typescript
public readonly dimensionMappingsInput: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>[]

---

##### `measureNameColumnInput`<sup>Optional</sup> <a name="measureNameColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.measureNameColumnInput"></a>

```typescript
public readonly measureNameColumnInput: string;
```

- *Type:* string

---

##### `mixedMeasureMappingsInput`<sup>Optional</sup> <a name="mixedMeasureMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.mixedMeasureMappingsInput"></a>

```typescript
public readonly mixedMeasureMappingsInput: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>[]

---

##### `multiMeasureMappingsInput`<sup>Optional</sup> <a name="multiMeasureMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.multiMeasureMappingsInput"></a>

```typescript
public readonly multiMeasureMappingsInput: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeColumnInput`<sup>Optional</sup> <a name="timeColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.timeColumnInput"></a>

```typescript
public readonly timeColumnInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `measureNameColumn`<sup>Required</sup> <a name="measureNameColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.measureNameColumn"></a>

```typescript
public readonly measureNameColumn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `timeColumn`<sup>Required</sup> <a name="timeColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.timeColumn"></a>

```typescript
public readonly timeColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a>

---



