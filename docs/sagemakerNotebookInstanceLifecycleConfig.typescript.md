# `sagemakerNotebookInstanceLifecycleConfig` Submodule <a name="`sagemakerNotebookInstanceLifecycleConfig` Submodule" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstanceLifecycleConfig <a name="SagemakerNotebookInstanceLifecycleConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig(scope: Construct, id: string, config?: SagemakerNotebookInstanceLifecycleConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig">SagemakerNotebookInstanceLifecycleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig">SagemakerNotebookInstanceLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate">putOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart">putOnStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName">resetNotebookInstanceLifecycleConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate">resetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart">resetOnStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnCreate` <a name="putOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate"></a>

```typescript
public putOnCreate(value: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnCreate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]

---

##### `putOnStart` <a name="putOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart"></a>

```typescript
public putOnStart(value: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnStart[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerNotebookInstanceLifecycleConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]

---

##### `resetNotebookInstanceLifecycleConfigName` <a name="resetNotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName"></a>

```typescript
public resetNotebookInstanceLifecycleConfigName(): void
```

##### `resetOnCreate` <a name="resetOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate"></a>

```typescript
public resetOnCreate(): void
```

##### `resetOnStart` <a name="resetOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart"></a>

```typescript
public resetOnStart(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerNotebookInstanceLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn">notebookInstanceLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate">onCreate</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart">onStart</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput">notebookInstanceLifecycleConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput">onCreateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput">onStartInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName">notebookInstanceLifecycleConfigName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notebookInstanceLifecycleConfigArn`<sup>Required</sup> <a name="notebookInstanceLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn"></a>

```typescript
public readonly notebookInstanceLifecycleConfigArn: string;
```

- *Type:* string

---

##### `onCreate`<sup>Required</sup> <a name="onCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate"></a>

```typescript
public readonly onCreate: SagemakerNotebookInstanceLifecycleConfigOnCreateList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a>

---

##### `onStart`<sup>Required</sup> <a name="onStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart"></a>

```typescript
public readonly onStart: SagemakerNotebookInstanceLifecycleConfigOnStartList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags"></a>

```typescript
public readonly tags: SagemakerNotebookInstanceLifecycleConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a>

---

##### `notebookInstanceLifecycleConfigNameInput`<sup>Optional</sup> <a name="notebookInstanceLifecycleConfigNameInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput"></a>

```typescript
public readonly notebookInstanceLifecycleConfigNameInput: string;
```

- *Type:* string

---

##### `onCreateInput`<sup>Optional</sup> <a name="onCreateInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput"></a>

```typescript
public readonly onCreateInput: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnCreate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]

---

##### `onStartInput`<sup>Optional</sup> <a name="onStartInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput"></a>

```typescript
public readonly onStartInput: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnStart[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerNotebookInstanceLifecycleConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]

---

##### `notebookInstanceLifecycleConfigName`<sup>Required</sup> <a name="notebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName"></a>

```typescript
public readonly notebookInstanceLifecycleConfigName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceLifecycleConfigConfig <a name="SagemakerNotebookInstanceLifecycleConfigConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

const sagemakerNotebookInstanceLifecycleConfigConfig: sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName">notebookInstanceLifecycleConfigName</a></code> | <code>string</code> | The name of the lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate">onCreate</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]</code> | A shell script that runs only once, when you create a notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart">onStart</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]</code> | A shell script that runs every time you start a notebook instance, including when you create the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `notebookInstanceLifecycleConfigName`<sup>Optional</sup> <a name="notebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName"></a>

```typescript
public readonly notebookInstanceLifecycleConfigName: string;
```

- *Type:* string

The name of the lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name SagemakerNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}

---

##### `onCreate`<sup>Optional</sup> <a name="onCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate"></a>

```typescript
public readonly onCreate: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnCreate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]

A shell script that runs only once, when you create a notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create SagemakerNotebookInstanceLifecycleConfig#on_create}

---

##### `onStart`<sup>Optional</sup> <a name="onStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart"></a>

```typescript
public readonly onStart: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnStart[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]

A shell script that runs every time you start a notebook instance, including when you create the notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start SagemakerNotebookInstanceLifecycleConfig#on_start}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerNotebookInstanceLifecycleConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags SagemakerNotebookInstanceLifecycleConfig#tags}

---

### SagemakerNotebookInstanceLifecycleConfigOnCreate <a name="SagemakerNotebookInstanceLifecycleConfigOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

const sagemakerNotebookInstanceLifecycleConfigOnCreate: sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigOnStart <a name="SagemakerNotebookInstanceLifecycleConfigOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

const sagemakerNotebookInstanceLifecycleConfigOnStart: sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigTags <a name="SagemakerNotebookInstanceLifecycleConfigTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

const sagemakerNotebookInstanceLifecycleConfigTags: sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#key SagemakerNotebookInstanceLifecycleConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#value SagemakerNotebookInstanceLifecycleConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceLifecycleConfigOnCreateList <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get"></a>

```typescript
public get(index: number): SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnCreate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]

---


### SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnCreate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>

---


### SagemakerNotebookInstanceLifecycleConfigOnStartList <a name="SagemakerNotebookInstanceLifecycleConfigOnStartList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get"></a>

```typescript
public get(index: number): SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnStart[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]

---


### SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnStart;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>

---


### SagemakerNotebookInstanceLifecycleConfigTagsList <a name="SagemakerNotebookInstanceLifecycleConfigTagsList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get"></a>

```typescript
public get(index: number): SagemakerNotebookInstanceLifecycleConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerNotebookInstanceLifecycleConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]

---


### SagemakerNotebookInstanceLifecycleConfigTagsOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerNotebookInstanceLifecycleConfigTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>

---



