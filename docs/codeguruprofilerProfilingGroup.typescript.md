# `codeguruprofilerProfilingGroup` Submodule <a name="`codeguruprofilerProfilingGroup` Submodule" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeguruprofilerProfilingGroup <a name="CodeguruprofilerProfilingGroup" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup(scope: Construct, id: string, config: CodeguruprofilerProfilingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig">CodeguruprofilerProfilingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig">CodeguruprofilerProfilingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions">putAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration">putAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentPermissions">resetAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAnomalyDetectionNotificationConfiguration">resetAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform">resetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentPermissions` <a name="putAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions"></a>

```typescript
public putAgentPermissions(value: CodeguruprofilerProfilingGroupAgentPermissions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---

##### `putAnomalyDetectionNotificationConfiguration` <a name="putAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration"></a>

```typescript
public putAnomalyDetectionNotificationConfiguration(value: IResolvable | CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | CodeguruprofilerProfilingGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]

---

##### `resetAgentPermissions` <a name="resetAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentPermissions"></a>

```typescript
public resetAgentPermissions(): void
```

##### `resetAnomalyDetectionNotificationConfiguration` <a name="resetAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAnomalyDetectionNotificationConfiguration"></a>

```typescript
public resetAnomalyDetectionNotificationConfiguration(): void
```

##### `resetComputePlatform` <a name="resetComputePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform"></a>

```typescript
public resetComputePlatform(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissions">agentPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference">CodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration">anomalyDetectionNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList">CodeguruprofilerProfilingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissionsInput">agentPermissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfigurationInput">anomalyDetectionNotificationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput">computePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupNameInput">profilingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform">computePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupName">profilingGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentPermissions`<sup>Required</sup> <a name="agentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissions"></a>

```typescript
public readonly agentPermissions: CodeguruprofilerProfilingGroupAgentPermissionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference">CodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a>

---

##### `anomalyDetectionNotificationConfiguration`<sup>Required</sup> <a name="anomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration"></a>

```typescript
public readonly anomalyDetectionNotificationConfiguration: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags"></a>

```typescript
public readonly tags: CodeguruprofilerProfilingGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList">CodeguruprofilerProfilingGroupTagsList</a>

---

##### `agentPermissionsInput`<sup>Optional</sup> <a name="agentPermissionsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissionsInput"></a>

```typescript
public readonly agentPermissionsInput: IResolvable | CodeguruprofilerProfilingGroupAgentPermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---

##### `anomalyDetectionNotificationConfigurationInput`<sup>Optional</sup> <a name="anomalyDetectionNotificationConfigurationInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfigurationInput"></a>

```typescript
public readonly anomalyDetectionNotificationConfigurationInput: IResolvable | CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]

---

##### `computePlatformInput`<sup>Optional</sup> <a name="computePlatformInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput"></a>

```typescript
public readonly computePlatformInput: string;
```

- *Type:* string

---

##### `profilingGroupNameInput`<sup>Optional</sup> <a name="profilingGroupNameInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupNameInput"></a>

```typescript
public readonly profilingGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CodeguruprofilerProfilingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform"></a>

```typescript
public readonly computePlatform: string;
```

- *Type:* string

---

##### `profilingGroupName`<sup>Required</sup> <a name="profilingGroupName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupName"></a>

```typescript
public readonly profilingGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeguruprofilerProfilingGroupAgentPermissions <a name="CodeguruprofilerProfilingGroupAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

const codeguruprofilerProfilingGroupAgentPermissions: codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.property.principals">principals</a></code> | <code>string[]</code> | The principals for the agent permissions. |

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

The principals for the agent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#principals CodeguruprofilerProfilingGroup#principals}

---

### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

const codeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration: codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelId">channelId</a></code> | <code>string</code> | Unique identifier for each Channel in the notification configuration of a Profiling Group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelUri">channelUri</a></code> | <code>string</code> | Unique arn of the resource to be used for notifications. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Unique identifier for each Channel in the notification configuration of a Profiling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#channel_id CodeguruprofilerProfilingGroup#channel_id}

---

##### `channelUri`<sup>Optional</sup> <a name="channelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelUri"></a>

```typescript
public readonly channelUri: string;
```

- *Type:* string

Unique arn of the resource to be used for notifications.

We support a valid SNS topic arn as a channel uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#channel_uri CodeguruprofilerProfilingGroup#channel_uri}

---

### CodeguruprofilerProfilingGroupConfig <a name="CodeguruprofilerProfilingGroupConfig" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

const codeguruprofilerProfilingGroupConfig: codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.profilingGroupName">profilingGroupName</a></code> | <code>string</code> | The name of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentPermissions">agentPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | The agent permissions attached to this profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.anomalyDetectionNotificationConfiguration">anomalyDetectionNotificationConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]</code> | Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform">computePlatform</a></code> | <code>string</code> | The compute platform of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]</code> | The tags associated with a profiling group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `profilingGroupName`<sup>Required</sup> <a name="profilingGroupName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.profilingGroupName"></a>

```typescript
public readonly profilingGroupName: string;
```

- *Type:* string

The name of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#profiling_group_name CodeguruprofilerProfilingGroup#profiling_group_name}

---

##### `agentPermissions`<sup>Optional</sup> <a name="agentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentPermissions"></a>

```typescript
public readonly agentPermissions: CodeguruprofilerProfilingGroupAgentPermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

The agent permissions attached to this profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#agent_permissions CodeguruprofilerProfilingGroup#agent_permissions}

---

##### `anomalyDetectionNotificationConfiguration`<sup>Optional</sup> <a name="anomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.anomalyDetectionNotificationConfiguration"></a>

```typescript
public readonly anomalyDetectionNotificationConfiguration: IResolvable | CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]

Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#anomaly_detection_notification_configuration CodeguruprofilerProfilingGroup#anomaly_detection_notification_configuration}

---

##### `computePlatform`<sup>Optional</sup> <a name="computePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform"></a>

```typescript
public readonly computePlatform: string;
```

- *Type:* string

The compute platform of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CodeguruprofilerProfilingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]

The tags associated with a profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}

---

### CodeguruprofilerProfilingGroupTags <a name="CodeguruprofilerProfilingGroupTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

const codeguruprofilerProfilingGroupTags: codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruprofilerProfilingGroupAgentPermissionsOutputReference <a name="CodeguruprofilerProfilingGroupAgentPermissionsOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resetPrincipals">resetPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resetPrincipals"></a>

```typescript
public resetPrincipals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeguruprofilerProfilingGroupAgentPermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---


### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get"></a>

```typescript
public get(index: number): CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]

---


### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelUri">resetChannelUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelId"></a>

```typescript
public resetChannelId(): void
```

##### `resetChannelUri` <a name="resetChannelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelUri"></a>

```typescript
public resetChannelUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUriInput">channelUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri">channelUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `channelUriInput`<sup>Optional</sup> <a name="channelUriInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUriInput"></a>

```typescript
public readonly channelUriInput: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelUri`<sup>Required</sup> <a name="channelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri"></a>

```typescript
public readonly channelUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>

---


### CodeguruprofilerProfilingGroupTagsList <a name="CodeguruprofilerProfilingGroupTagsList" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get"></a>

```typescript
public get(index: number): CodeguruprofilerProfilingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeguruprofilerProfilingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]

---


### CodeguruprofilerProfilingGroupTagsOutputReference <a name="CodeguruprofilerProfilingGroupTagsOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer"></a>

```typescript
import { codeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeguruprofilerProfilingGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>

---



