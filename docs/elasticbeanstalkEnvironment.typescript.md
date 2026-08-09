# `elasticbeanstalkEnvironment` Submodule <a name="`elasticbeanstalkEnvironment` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkEnvironment <a name="ElasticbeanstalkEnvironment" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment awscc_elasticbeanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

new elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment(scope: Construct, id: string, config: ElasticbeanstalkEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig">ElasticbeanstalkEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig">ElasticbeanstalkEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings">putOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier">putTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetCnamePrefix">resetCnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetEnvironmentName">resetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOperationsRole">resetOperationsRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOptionSettings">resetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetPlatformArn">resetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetSolutionStackName">resetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTemplateName">resetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetVersionLabel">resetVersionLabel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptionSettings` <a name="putOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings"></a>

```typescript
public putOptionSettings(value: IResolvable | ElasticbeanstalkEnvironmentOptionSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags"></a>

```typescript
public putTags(value: IResolvable | ElasticbeanstalkEnvironmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]

---

##### `putTier` <a name="putTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier"></a>

```typescript
public putTier(value: ElasticbeanstalkEnvironmentTier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---

##### `resetCnamePrefix` <a name="resetCnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetCnamePrefix"></a>

```typescript
public resetCnamePrefix(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironmentName` <a name="resetEnvironmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetEnvironmentName"></a>

```typescript
public resetEnvironmentName(): void
```

##### `resetOperationsRole` <a name="resetOperationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOperationsRole"></a>

```typescript
public resetOperationsRole(): void
```

##### `resetOptionSettings` <a name="resetOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOptionSettings"></a>

```typescript
public resetOptionSettings(): void
```

##### `resetPlatformArn` <a name="resetPlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetPlatformArn"></a>

```typescript
public resetPlatformArn(): void
```

##### `resetSolutionStackName` <a name="resetSolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetSolutionStackName"></a>

```typescript
public resetSolutionStackName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTemplateName"></a>

```typescript
public resetTemplateName(): void
```

##### `resetTier` <a name="resetTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetVersionLabel` <a name="resetVersionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetVersionLabel"></a>

```typescript
public resetVersionLabel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticbeanstalkEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticbeanstalkEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettings">optionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList">ElasticbeanstalkEnvironmentOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList">ElasticbeanstalkEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tier">tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference">ElasticbeanstalkEnvironmentTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefixInput">cnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentNameInput">environmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRoleInput">operationsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettingsInput">optionSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArnInput">platformArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackNameInput">solutionStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tierInput">tierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabelInput">versionLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefix">cnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRole">operationsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArn">platformArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabel">versionLabel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `optionSettings`<sup>Required</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettings"></a>

```typescript
public readonly optionSettings: ElasticbeanstalkEnvironmentOptionSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList">ElasticbeanstalkEnvironmentOptionSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tags"></a>

```typescript
public readonly tags: ElasticbeanstalkEnvironmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList">ElasticbeanstalkEnvironmentTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tier"></a>

```typescript
public readonly tier: ElasticbeanstalkEnvironmentTierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference">ElasticbeanstalkEnvironmentTierOutputReference</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `cnamePrefixInput`<sup>Optional</sup> <a name="cnamePrefixInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefixInput"></a>

```typescript
public readonly cnamePrefixInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentNameInput"></a>

```typescript
public readonly environmentNameInput: string;
```

- *Type:* string

---

##### `operationsRoleInput`<sup>Optional</sup> <a name="operationsRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRoleInput"></a>

```typescript
public readonly operationsRoleInput: string;
```

- *Type:* string

---

##### `optionSettingsInput`<sup>Optional</sup> <a name="optionSettingsInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettingsInput"></a>

```typescript
public readonly optionSettingsInput: IResolvable | ElasticbeanstalkEnvironmentOptionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]

---

##### `platformArnInput`<sup>Optional</sup> <a name="platformArnInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArnInput"></a>

```typescript
public readonly platformArnInput: string;
```

- *Type:* string

---

##### `solutionStackNameInput`<sup>Optional</sup> <a name="solutionStackNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackNameInput"></a>

```typescript
public readonly solutionStackNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ElasticbeanstalkEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tierInput"></a>

```typescript
public readonly tierInput: IResolvable | ElasticbeanstalkEnvironmentTier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---

##### `versionLabelInput`<sup>Optional</sup> <a name="versionLabelInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabelInput"></a>

```typescript
public readonly versionLabelInput: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `cnamePrefix`<sup>Required</sup> <a name="cnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefix"></a>

```typescript
public readonly cnamePrefix: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `operationsRole`<sup>Required</sup> <a name="operationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRole"></a>

```typescript
public readonly operationsRole: string;
```

- *Type:* string

---

##### `platformArn`<sup>Required</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArn"></a>

```typescript
public readonly platformArn: string;
```

- *Type:* string

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `versionLabel`<sup>Required</sup> <a name="versionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabel"></a>

```typescript
public readonly versionLabel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkEnvironmentConfig <a name="ElasticbeanstalkEnvironmentConfig" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

const elasticbeanstalkEnvironmentConfig: elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the application that is associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.cnamePrefix">cnamePrefix</a></code> | <code>string</code> | If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.description">description</a></code> | <code>string</code> | Your description for this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.environmentName">environmentName</a></code> | <code>string</code> | A unique name for the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.operationsRole">operationsRole</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.optionSettings">optionSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]</code> | Key-value pairs defining configuration options for this environment, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.platformArn">platformArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the custom platform to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]</code> | Specifies the tags applied to resources in the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.templateName">templateName</a></code> | <code>string</code> | The name of the Elastic Beanstalk configuration template to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tier">tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | Specifies the tier to use in creating this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.versionLabel">versionLabel</a></code> | <code>string</code> | The name of the application version to deploy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the application that is associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#application_name ElasticbeanstalkEnvironment#application_name}

---

##### `cnamePrefix`<sup>Optional</sup> <a name="cnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.cnamePrefix"></a>

```typescript
public readonly cnamePrefix: string;
```

- *Type:* string

If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL.

If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#cname_prefix ElasticbeanstalkEnvironment#cname_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Your description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#description ElasticbeanstalkEnvironment#description}

---

##### `environmentName`<sup>Optional</sup> <a name="environmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

A unique name for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#environment_name ElasticbeanstalkEnvironment#environment_name}

---

##### `operationsRole`<sup>Optional</sup> <a name="operationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.operationsRole"></a>

```typescript
public readonly operationsRole: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#operations_role ElasticbeanstalkEnvironment#operations_role}

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.optionSettings"></a>

```typescript
public readonly optionSettings: IResolvable | ElasticbeanstalkEnvironmentOptionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]

Key-value pairs defining configuration options for this environment, such as the instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#option_settings ElasticbeanstalkEnvironment#option_settings}

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.platformArn"></a>

```typescript
public readonly platformArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the custom platform to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#platform_arn ElasticbeanstalkEnvironment#platform_arn}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#solution_stack_name ElasticbeanstalkEnvironment#solution_stack_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ElasticbeanstalkEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]

Specifies the tags applied to resources in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#tags ElasticbeanstalkEnvironment#tags}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The name of the Elastic Beanstalk configuration template to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#template_name ElasticbeanstalkEnvironment#template_name}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tier"></a>

```typescript
public readonly tier: ElasticbeanstalkEnvironmentTier;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

Specifies the tier to use in creating this environment.

The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#tier ElasticbeanstalkEnvironment#tier}

---

##### `versionLabel`<sup>Optional</sup> <a name="versionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.versionLabel"></a>

```typescript
public readonly versionLabel: string;
```

- *Type:* string

The name of the application version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#version_label ElasticbeanstalkEnvironment#version_label}

---

### ElasticbeanstalkEnvironmentOptionSettings <a name="ElasticbeanstalkEnvironmentOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

const elasticbeanstalkEnvironmentOptionSettings: elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.namespace">namespace</a></code> | <code>string</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.optionName">optionName</a></code> | <code>string</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.resourceName">resourceName</a></code> | <code>string</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.value">value</a></code> | <code>string</code> | The current value for the configuration option. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#namespace ElasticbeanstalkEnvironment#namespace}

---

##### `optionName`<sup>Optional</sup> <a name="optionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.optionName"></a>

```typescript
public readonly optionName: string;
```

- *Type:* string

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#option_name ElasticbeanstalkEnvironment#option_name}

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#resource_name ElasticbeanstalkEnvironment#resource_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#value ElasticbeanstalkEnvironment#value}

---

### ElasticbeanstalkEnvironmentTags <a name="ElasticbeanstalkEnvironmentTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

const elasticbeanstalkEnvironmentTags: elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#key ElasticbeanstalkEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#value ElasticbeanstalkEnvironment#value}

---

### ElasticbeanstalkEnvironmentTier <a name="ElasticbeanstalkEnvironmentTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

const elasticbeanstalkEnvironmentTier: elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.name">name</a></code> | <code>string</code> | The name of this environment tier. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.type">type</a></code> | <code>string</code> | The type of this environment tier. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.version">version</a></code> | <code>string</code> | The version of this environment tier. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#name ElasticbeanstalkEnvironment#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#type ElasticbeanstalkEnvironment#type}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of this environment tier.

When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticbeanstalk_environment#version ElasticbeanstalkEnvironment#version}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkEnvironmentOptionSettingsList <a name="ElasticbeanstalkEnvironmentOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

new elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get"></a>

```typescript
public get(index: number): ElasticbeanstalkEnvironmentOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkEnvironmentOptionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]

---


### ElasticbeanstalkEnvironmentOptionSettingsOutputReference <a name="ElasticbeanstalkEnvironmentOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

new elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetOptionName">resetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOptionName` <a name="resetOptionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetOptionName"></a>

```typescript
public resetOptionName(): void
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionNameInput">optionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName">optionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `optionNameInput`<sup>Optional</sup> <a name="optionNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionNameInput"></a>

```typescript
public readonly optionNameInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName"></a>

```typescript
public readonly optionName: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkEnvironmentOptionSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>

---


### ElasticbeanstalkEnvironmentTagsList <a name="ElasticbeanstalkEnvironmentTagsList" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

new elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get"></a>

```typescript
public get(index: number): ElasticbeanstalkEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]

---


### ElasticbeanstalkEnvironmentTagsOutputReference <a name="ElasticbeanstalkEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

new elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkEnvironmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>

---


### ElasticbeanstalkEnvironmentTierOutputReference <a name="ElasticbeanstalkEnvironmentTierOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkEnvironment } from '@cdktn/provider-awscc'

new elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkEnvironmentTier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---



