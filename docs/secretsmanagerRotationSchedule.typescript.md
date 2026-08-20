# `secretsmanagerRotationSchedule` Submodule <a name="`secretsmanagerRotationSchedule` Submodule" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerRotationSchedule <a name="SecretsmanagerRotationSchedule" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

new secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule(scope: Construct, id: string, config: SecretsmanagerRotationScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig">SecretsmanagerRotationScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig">SecretsmanagerRotationScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata">putExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda">putHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules">putRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationMetadata">resetExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationRoleArn">resetExternalSecretRotationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetHostedRotationLambda">resetHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotateImmediatelyOnUpdate">resetRotateImmediatelyOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationLambdaArn">resetRotationLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationRules">resetRotationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalSecretRotationMetadata` <a name="putExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata"></a>

```typescript
public putExternalSecretRotationMetadata(value: IResolvable | SecretsmanagerRotationScheduleExternalSecretRotationMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]

---

##### `putHostedRotationLambda` <a name="putHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda"></a>

```typescript
public putHostedRotationLambda(value: SecretsmanagerRotationScheduleHostedRotationLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---

##### `putRotationRules` <a name="putRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules"></a>

```typescript
public putRotationRules(value: SecretsmanagerRotationScheduleRotationRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---

##### `resetExternalSecretRotationMetadata` <a name="resetExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationMetadata"></a>

```typescript
public resetExternalSecretRotationMetadata(): void
```

##### `resetExternalSecretRotationRoleArn` <a name="resetExternalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationRoleArn"></a>

```typescript
public resetExternalSecretRotationRoleArn(): void
```

##### `resetHostedRotationLambda` <a name="resetHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetHostedRotationLambda"></a>

```typescript
public resetHostedRotationLambda(): void
```

##### `resetRotateImmediatelyOnUpdate` <a name="resetRotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotateImmediatelyOnUpdate"></a>

```typescript
public resetRotateImmediatelyOnUpdate(): void
```

##### `resetRotationLambdaArn` <a name="resetRotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationLambdaArn"></a>

```typescript
public resetRotationLambdaArn(): void
```

##### `resetRotationRules` <a name="resetRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationRules"></a>

```typescript
public resetRotationRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsmanagerRotationSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsmanagerRotationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerRotationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadata">externalSecretRotationMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList">SecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambda">hostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference">SecretsmanagerRotationScheduleRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationScheduleId">rotationScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadataInput">externalSecretRotationMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArnInput">externalSecretRotationRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambdaInput">hostedRotationLambdaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdateInput">rotateImmediatelyOnUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArnInput">rotationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRulesInput">rotationRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn">externalSecretRotationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate">rotateImmediatelyOnUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `externalSecretRotationMetadata`<sup>Required</sup> <a name="externalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadata"></a>

```typescript
public readonly externalSecretRotationMetadata: SecretsmanagerRotationScheduleExternalSecretRotationMetadataList;
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList">SecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a>

---

##### `hostedRotationLambda`<sup>Required</sup> <a name="hostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambda"></a>

```typescript
public readonly hostedRotationLambda: SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRules"></a>

```typescript
public readonly rotationRules: SecretsmanagerRotationScheduleRotationRulesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference">SecretsmanagerRotationScheduleRotationRulesOutputReference</a>

---

##### `rotationScheduleId`<sup>Required</sup> <a name="rotationScheduleId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationScheduleId"></a>

```typescript
public readonly rotationScheduleId: string;
```

- *Type:* string

---

##### `externalSecretRotationMetadataInput`<sup>Optional</sup> <a name="externalSecretRotationMetadataInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadataInput"></a>

```typescript
public readonly externalSecretRotationMetadataInput: IResolvable | SecretsmanagerRotationScheduleExternalSecretRotationMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]

---

##### `externalSecretRotationRoleArnInput`<sup>Optional</sup> <a name="externalSecretRotationRoleArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArnInput"></a>

```typescript
public readonly externalSecretRotationRoleArnInput: string;
```

- *Type:* string

---

##### `hostedRotationLambdaInput`<sup>Optional</sup> <a name="hostedRotationLambdaInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambdaInput"></a>

```typescript
public readonly hostedRotationLambdaInput: IResolvable | SecretsmanagerRotationScheduleHostedRotationLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---

##### `rotateImmediatelyOnUpdateInput`<sup>Optional</sup> <a name="rotateImmediatelyOnUpdateInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdateInput"></a>

```typescript
public readonly rotateImmediatelyOnUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rotationLambdaArnInput`<sup>Optional</sup> <a name="rotationLambdaArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArnInput"></a>

```typescript
public readonly rotationLambdaArnInput: string;
```

- *Type:* string

---

##### `rotationRulesInput`<sup>Optional</sup> <a name="rotationRulesInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRulesInput"></a>

```typescript
public readonly rotationRulesInput: IResolvable | SecretsmanagerRotationScheduleRotationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `externalSecretRotationRoleArn`<sup>Required</sup> <a name="externalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn"></a>

```typescript
public readonly externalSecretRotationRoleArn: string;
```

- *Type:* string

---

##### `rotateImmediatelyOnUpdate`<sup>Required</sup> <a name="rotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate"></a>

```typescript
public readonly rotateImmediatelyOnUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rotationLambdaArn`<sup>Required</sup> <a name="rotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArn"></a>

```typescript
public readonly rotationLambdaArn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerRotationScheduleConfig <a name="SecretsmanagerRotationScheduleConfig" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

const secretsmanagerRotationScheduleConfig: secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.secretId">secretId</a></code> | <code>string</code> | The ARN or name of the secret to rotate. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationMetadata">externalSecretRotationMetadata</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]</code> | The list of metadata needed to successfully rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationRoleArn">externalSecretRotationRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.hostedRotationLambda">hostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotateImmediatelyOnUpdate">rotateImmediatelyOnUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>string</code> | The ARN of an existing Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | A structure that defines the rotation configuration for this secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The ARN or name of the secret to rotate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#secret_id SecretsmanagerRotationSchedule#secret_id}

---

##### `externalSecretRotationMetadata`<sup>Optional</sup> <a name="externalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationMetadata"></a>

```typescript
public readonly externalSecretRotationMetadata: IResolvable | SecretsmanagerRotationScheduleExternalSecretRotationMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]

The list of metadata needed to successfully rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_metadata SecretsmanagerRotationSchedule#external_secret_rotation_metadata}

---

##### `externalSecretRotationRoleArn`<sup>Optional</sup> <a name="externalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationRoleArn"></a>

```typescript
public readonly externalSecretRotationRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_role_arn SecretsmanagerRotationSchedule#external_secret_rotation_role_arn}

---

##### `hostedRotationLambda`<sup>Optional</sup> <a name="hostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.hostedRotationLambda"></a>

```typescript
public readonly hostedRotationLambda: SecretsmanagerRotationScheduleHostedRotationLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates.

To use a rotation function that already exists, specify RotationLambdaARN instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#hosted_rotation_lambda SecretsmanagerRotationSchedule#hosted_rotation_lambda}

---

##### `rotateImmediatelyOnUpdate`<sup>Optional</sup> <a name="rotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotateImmediatelyOnUpdate"></a>

```typescript
public readonly rotateImmediatelyOnUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#rotate_immediately_on_update SecretsmanagerRotationSchedule#rotate_immediately_on_update}

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="rotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationLambdaArn"></a>

```typescript
public readonly rotationLambdaArn: string;
```

- *Type:* string

The ARN of an existing Lambda rotation function.

To specify a rotation function that is also defined in this template, use the Ref function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_arn SecretsmanagerRotationSchedule#rotation_lambda_arn}

---

##### `rotationRules`<sup>Optional</sup> <a name="rotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationRules"></a>

```typescript
public readonly rotationRules: SecretsmanagerRotationScheduleRotationRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

A structure that defines the rotation configuration for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#rotation_rules SecretsmanagerRotationSchedule#rotation_rules}

---

### SecretsmanagerRotationScheduleExternalSecretRotationMetadata <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

const secretsmanagerRotationScheduleExternalSecretRotationMetadata: secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.key">key</a></code> | <code>string</code> | The key name of the metadata item. You can specify a value that's 1 to 256 characters in length. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.value">value</a></code> | <code>string</code> | The value for the metadata item. You can specify a value that's 1 to 2048 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the metadata item. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#key SecretsmanagerRotationSchedule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the metadata item. You can specify a value that's 1 to 2048 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#value SecretsmanagerRotationSchedule#value}

---

### SecretsmanagerRotationScheduleHostedRotationLambda <a name="SecretsmanagerRotationScheduleHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

const secretsmanagerRotationScheduleHostedRotationLambda: secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.excludeCharacters">excludeCharacters</a></code> | <code>string</code> | A string of the characters that you don't want in the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key that Secrets Manager uses to encrypt the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretArn">masterSecretArn</a></code> | <code>string</code> | The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretKmsKeyArn">masterSecretKmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationLambdaName">rotationLambdaName</a></code> | <code>string</code> | The name of the Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationType">rotationType</a></code> | <code>string</code> | The type of rotation template to use. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.runtime">runtime</a></code> | <code>string</code> | The python runtime associated with the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretArn">superuserSecretArn</a></code> | <code>string</code> | The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretKmsKeyArn">superuserSecretKmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string</code> | A comma-separated list of security group IDs applied to the target database. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string</code> | A comma separated list of VPC subnet IDs of the target database network. |

---

##### `excludeCharacters`<sup>Optional</sup> <a name="excludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.excludeCharacters"></a>

```typescript
public readonly excludeCharacters: string;
```

- *Type:* string

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#exclude_characters SecretsmanagerRotationSchedule#exclude_characters}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key that Secrets Manager uses to encrypt the secret.

If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If aws/secretsmanager doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#kms_key_arn SecretsmanagerRotationSchedule#kms_key_arn}

---

##### `masterSecretArn`<sup>Optional</sup> <a name="masterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretArn"></a>

```typescript
public readonly masterSecretArn: string;
```

- *Type:* string

The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy.

CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#master_secret_arn SecretsmanagerRotationSchedule#master_secret_arn}

---

##### `masterSecretKmsKeyArn`<sup>Optional</sup> <a name="masterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretKmsKeyArn"></a>

```typescript
public readonly masterSecretKmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key.

You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#master_secret_kms_key_arn SecretsmanagerRotationSchedule#master_secret_kms_key_arn}

---

##### `rotationLambdaName`<sup>Optional</sup> <a name="rotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationLambdaName"></a>

```typescript
public readonly rotationLambdaName: string;
```

- *Type:* string

The name of the Lambda rotation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_name SecretsmanagerRotationSchedule#rotation_lambda_name}

---

##### `rotationType`<sup>Optional</sup> <a name="rotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationType"></a>

```typescript
public readonly rotationType: string;
```

- *Type:* string

The type of rotation template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#rotation_type SecretsmanagerRotationSchedule#rotation_type}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

The python runtime associated with the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#runtime SecretsmanagerRotationSchedule#runtime}

---

##### `superuserSecretArn`<sup>Optional</sup> <a name="superuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretArn"></a>

```typescript
public readonly superuserSecretArn: string;
```

- *Type:* string

The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy.

CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#superuser_secret_arn SecretsmanagerRotationSchedule#superuser_secret_arn}

---

##### `superuserSecretKmsKeyArn`<sup>Optional</sup> <a name="superuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretKmsKeyArn"></a>

```typescript
public readonly superuserSecretKmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key.

You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#superuser_secret_kms_key_arn SecretsmanagerRotationSchedule#superuser_secret_kms_key_arn}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string;
```

- *Type:* string

A comma-separated list of security group IDs applied to the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#vpc_security_group_ids SecretsmanagerRotationSchedule#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Optional</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string;
```

- *Type:* string

A comma separated list of VPC subnet IDs of the target database network.

The Lambda rotation function is in the same subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#vpc_subnet_ids SecretsmanagerRotationSchedule#vpc_subnet_ids}

---

### SecretsmanagerRotationScheduleRotationRules <a name="SecretsmanagerRotationScheduleRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

const secretsmanagerRotationScheduleRotationRules: secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>number</code> | The number of days between automatic scheduled rotations of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.duration">duration</a></code> | <code>string</code> | The length of the rotation window in hours, for example 3h for a three hour window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | A cron() or rate() expression that defines the schedule for rotating your secret. |

---

##### `automaticallyAfterDays`<sup>Optional</sup> <a name="automaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.automaticallyAfterDays"></a>

```typescript
public readonly automaticallyAfterDays: number;
```

- *Type:* number

The number of days between automatic scheduled rotations of the secret.

You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#automatically_after_days SecretsmanagerRotationSchedule#automatically_after_days}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The length of the rotation window in hours, for example 3h for a three hour window.

Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the ScheduleExpression. If you don't specify a Duration, for a ScheduleExpression in hours, the window automatically closes after one hour. For a ScheduleExpression in days, the window automatically closes at the end of the UTC day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#duration SecretsmanagerRotationSchedule#duration}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

A cron() or rate() expression that defines the schedule for rotating your secret.

Secrets Manager rotation schedules use UTC time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_rotation_schedule#schedule_expression SecretsmanagerRotationSchedule#schedule_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerRotationScheduleExternalSecretRotationMetadataList <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadataList" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

new secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get"></a>

```typescript
public get(index: number): SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretsmanagerRotationScheduleExternalSecretRotationMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]

---


### SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

new secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretsmanagerRotationScheduleExternalSecretRotationMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>

---


### SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference <a name="SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

new secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetExcludeCharacters">resetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretArn">resetMasterSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretKmsKeyArn">resetMasterSecretKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationLambdaName">resetRotationLambdaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationType">resetRotationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretArn">resetSuperuserSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretKmsKeyArn">resetSuperuserSecretKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSubnetIds">resetVpcSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeCharacters` <a name="resetExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetExcludeCharacters"></a>

```typescript
public resetExcludeCharacters(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetMasterSecretArn` <a name="resetMasterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretArn"></a>

```typescript
public resetMasterSecretArn(): void
```

##### `resetMasterSecretKmsKeyArn` <a name="resetMasterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretKmsKeyArn"></a>

```typescript
public resetMasterSecretKmsKeyArn(): void
```

##### `resetRotationLambdaName` <a name="resetRotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationLambdaName"></a>

```typescript
public resetRotationLambdaName(): void
```

##### `resetRotationType` <a name="resetRotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationType"></a>

```typescript
public resetRotationType(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetSuperuserSecretArn` <a name="resetSuperuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretArn"></a>

```typescript
public resetSuperuserSecretArn(): void
```

##### `resetSuperuserSecretKmsKeyArn` <a name="resetSuperuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretKmsKeyArn"></a>

```typescript
public resetSuperuserSecretKmsKeyArn(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

##### `resetVpcSubnetIds` <a name="resetVpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSubnetIds"></a>

```typescript
public resetVpcSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharactersInput">excludeCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArnInput">masterSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArnInput">masterSecretKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaNameInput">rotationLambdaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationTypeInput">rotationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArnInput">superuserSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArnInput">superuserSecretKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters">excludeCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn">masterSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn">masterSecretKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName">rotationLambdaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType">rotationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn">superuserSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn">superuserSecretKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeCharactersInput`<sup>Optional</sup> <a name="excludeCharactersInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharactersInput"></a>

```typescript
public readonly excludeCharactersInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `masterSecretArnInput`<sup>Optional</sup> <a name="masterSecretArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArnInput"></a>

```typescript
public readonly masterSecretArnInput: string;
```

- *Type:* string

---

##### `masterSecretKmsKeyArnInput`<sup>Optional</sup> <a name="masterSecretKmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArnInput"></a>

```typescript
public readonly masterSecretKmsKeyArnInput: string;
```

- *Type:* string

---

##### `rotationLambdaNameInput`<sup>Optional</sup> <a name="rotationLambdaNameInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaNameInput"></a>

```typescript
public readonly rotationLambdaNameInput: string;
```

- *Type:* string

---

##### `rotationTypeInput`<sup>Optional</sup> <a name="rotationTypeInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationTypeInput"></a>

```typescript
public readonly rotationTypeInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `superuserSecretArnInput`<sup>Optional</sup> <a name="superuserSecretArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArnInput"></a>

```typescript
public readonly superuserSecretArnInput: string;
```

- *Type:* string

---

##### `superuserSecretKmsKeyArnInput`<sup>Optional</sup> <a name="superuserSecretKmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArnInput"></a>

```typescript
public readonly superuserSecretKmsKeyArnInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string;
```

- *Type:* string

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIdsInput"></a>

```typescript
public readonly vpcSubnetIdsInput: string;
```

- *Type:* string

---

##### `excludeCharacters`<sup>Required</sup> <a name="excludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters"></a>

```typescript
public readonly excludeCharacters: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `masterSecretArn`<sup>Required</sup> <a name="masterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn"></a>

```typescript
public readonly masterSecretArn: string;
```

- *Type:* string

---

##### `masterSecretKmsKeyArn`<sup>Required</sup> <a name="masterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn"></a>

```typescript
public readonly masterSecretKmsKeyArn: string;
```

- *Type:* string

---

##### `rotationLambdaName`<sup>Required</sup> <a name="rotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName"></a>

```typescript
public readonly rotationLambdaName: string;
```

- *Type:* string

---

##### `rotationType`<sup>Required</sup> <a name="rotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType"></a>

```typescript
public readonly rotationType: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `superuserSecretArn`<sup>Required</sup> <a name="superuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn"></a>

```typescript
public readonly superuserSecretArn: string;
```

- *Type:* string

---

##### `superuserSecretKmsKeyArn`<sup>Required</sup> <a name="superuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn"></a>

```typescript
public readonly superuserSecretKmsKeyArn: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string;
```

- *Type:* string

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretsmanagerRotationScheduleHostedRotationLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---


### SecretsmanagerRotationScheduleRotationRulesOutputReference <a name="SecretsmanagerRotationScheduleRotationRulesOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer"></a>

```typescript
import { secretsmanagerRotationSchedule } from '@cdktn/provider-awscc'

new secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetAutomaticallyAfterDays">resetAutomaticallyAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticallyAfterDays` <a name="resetAutomaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetAutomaticallyAfterDays"></a>

```typescript
public resetAutomaticallyAfterDays(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetScheduleExpression"></a>

```typescript
public resetScheduleExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDaysInput">automaticallyAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticallyAfterDaysInput`<sup>Optional</sup> <a name="automaticallyAfterDaysInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```typescript
public readonly automaticallyAfterDaysInput: number;
```

- *Type:* number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `automaticallyAfterDays`<sup>Required</sup> <a name="automaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```typescript
public readonly automaticallyAfterDays: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretsmanagerRotationScheduleRotationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---



