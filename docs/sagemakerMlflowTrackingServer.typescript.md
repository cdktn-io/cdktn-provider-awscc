# `sagemakerMlflowTrackingServer` Submodule <a name="`sagemakerMlflowTrackingServer` Submodule" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowTrackingServer <a name="SagemakerMlflowTrackingServer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server awscc_sagemaker_mlflow_tracking_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

new sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer(scope: Construct, id: string, config: SagemakerMlflowTrackingServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig">SagemakerMlflowTrackingServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig">SagemakerMlflowTrackingServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration">resetAutomaticModelRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion">resetMlflowVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize">resetTrackingServerSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart">resetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerMlflowTrackingServerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]

---

##### `resetAutomaticModelRegistration` <a name="resetAutomaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration"></a>

```typescript
public resetAutomaticModelRegistration(): void
```

##### `resetMlflowVersion` <a name="resetMlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion"></a>

```typescript
public resetMlflowVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrackingServerSize` <a name="resetTrackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize"></a>

```typescript
public resetTrackingServerSize(): void
```

##### `resetWeeklyMaintenanceWindowStart` <a name="resetWeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart"></a>

```typescript
public resetWeeklyMaintenanceWindowStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerMlflowTrackingServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerMlflowTrackingServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerMlflowTrackingServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerMlflowTrackingServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowTrackingServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList">SagemakerMlflowTrackingServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerArn">trackingServerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput">artifactStoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput">automaticModelRegistrationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput">mlflowVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput">trackingServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput">trackingServerSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput">weeklyMaintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri">artifactStoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration">automaticModelRegistration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion">mlflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName">trackingServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize">trackingServerSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags"></a>

```typescript
public readonly tags: SagemakerMlflowTrackingServerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList">SagemakerMlflowTrackingServerTagsList</a>

---

##### `trackingServerArn`<sup>Required</sup> <a name="trackingServerArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerArn"></a>

```typescript
public readonly trackingServerArn: string;
```

- *Type:* string

---

##### `artifactStoreUriInput`<sup>Optional</sup> <a name="artifactStoreUriInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput"></a>

```typescript
public readonly artifactStoreUriInput: string;
```

- *Type:* string

---

##### `automaticModelRegistrationInput`<sup>Optional</sup> <a name="automaticModelRegistrationInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput"></a>

```typescript
public readonly automaticModelRegistrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mlflowVersionInput`<sup>Optional</sup> <a name="mlflowVersionInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput"></a>

```typescript
public readonly mlflowVersionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerMlflowTrackingServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]

---

##### `trackingServerNameInput`<sup>Optional</sup> <a name="trackingServerNameInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput"></a>

```typescript
public readonly trackingServerNameInput: string;
```

- *Type:* string

---

##### `trackingServerSizeInput`<sup>Optional</sup> <a name="trackingServerSizeInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput"></a>

```typescript
public readonly trackingServerSizeInput: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStartInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput"></a>

```typescript
public readonly weeklyMaintenanceWindowStartInput: string;
```

- *Type:* string

---

##### `artifactStoreUri`<sup>Required</sup> <a name="artifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri"></a>

```typescript
public readonly artifactStoreUri: string;
```

- *Type:* string

---

##### `automaticModelRegistration`<sup>Required</sup> <a name="automaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration"></a>

```typescript
public readonly automaticModelRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mlflowVersion`<sup>Required</sup> <a name="mlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion"></a>

```typescript
public readonly mlflowVersion: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `trackingServerName`<sup>Required</sup> <a name="trackingServerName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName"></a>

```typescript
public readonly trackingServerName: string;
```

- *Type:* string

---

##### `trackingServerSize`<sup>Required</sup> <a name="trackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize"></a>

```typescript
public readonly trackingServerSize: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindowStart`<sup>Required</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowTrackingServerConfig <a name="SagemakerMlflowTrackingServerConfig" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.Initializer"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

const sagemakerMlflowTrackingServerConfig: sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri">artifactStoreUri</a></code> | <code>string</code> | The Amazon S3 URI for MLFlow Tracking Server artifacts. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName">trackingServerName</a></code> | <code>string</code> | The name of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration">automaticModelRegistration</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag to enable Automatic SageMaker Model Registration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion">mlflowVersion</a></code> | <code>string</code> | The MLFlow Version used on the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize">trackingServerSize</a></code> | <code>string</code> | The size of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | The start of the time window for maintenance of the MLFlow Tracking Server in UTC time. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `artifactStoreUri`<sup>Required</sup> <a name="artifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri"></a>

```typescript
public readonly artifactStoreUri: string;
```

- *Type:* string

The Amazon S3 URI for MLFlow Tracking Server artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri SagemakerMlflowTrackingServer#artifact_store_uri}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn SagemakerMlflowTrackingServer#role_arn}

---

##### `trackingServerName`<sup>Required</sup> <a name="trackingServerName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName"></a>

```typescript
public readonly trackingServerName: string;
```

- *Type:* string

The name of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name SagemakerMlflowTrackingServer#tracking_server_name}

---

##### `automaticModelRegistration`<sup>Optional</sup> <a name="automaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration"></a>

```typescript
public readonly automaticModelRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag to enable Automatic SageMaker Model Registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration SagemakerMlflowTrackingServer#automatic_model_registration}

---

##### `mlflowVersion`<sup>Optional</sup> <a name="mlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion"></a>

```typescript
public readonly mlflowVersion: string;
```

- *Type:* string

The MLFlow Version used on the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version SagemakerMlflowTrackingServer#mlflow_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerMlflowTrackingServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tags SagemakerMlflowTrackingServer#tags}

---

##### `trackingServerSize`<sup>Optional</sup> <a name="trackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize"></a>

```typescript
public readonly trackingServerSize: string;
```

- *Type:* string

The size of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size SagemakerMlflowTrackingServer#tracking_server_size}

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start SagemakerMlflowTrackingServer#weekly_maintenance_window_start}

---

### SagemakerMlflowTrackingServerTags <a name="SagemakerMlflowTrackingServerTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.Initializer"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

const sagemakerMlflowTrackingServerTags: sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#key SagemakerMlflowTrackingServer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#value SagemakerMlflowTrackingServer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowTrackingServerTagsList <a name="SagemakerMlflowTrackingServerTagsList" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

new sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get"></a>

```typescript
public get(index: number): SagemakerMlflowTrackingServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerMlflowTrackingServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]

---


### SagemakerMlflowTrackingServerTagsOutputReference <a name="SagemakerMlflowTrackingServerTagsOutputReference" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerMlflowTrackingServer } from '@cdktn/provider-awscc'

new sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerMlflowTrackingServerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>

---



