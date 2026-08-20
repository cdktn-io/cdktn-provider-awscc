# `elasticbeanstalkConfigurationTemplate` Submodule <a name="`elasticbeanstalkConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkConfigurationTemplate <a name="ElasticbeanstalkConfigurationTemplate" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

new elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate(scope: Construct, id: string, config: ElasticbeanstalkConfigurationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig">ElasticbeanstalkConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig">ElasticbeanstalkConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings">putOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration">putSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings">resetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn">resetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName">resetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration">resetSourceConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptionSettings` <a name="putOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings"></a>

```typescript
public putOptionSettings(value: IResolvable | ElasticbeanstalkConfigurationTemplateOptionSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]

---

##### `putSourceConfiguration` <a name="putSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration"></a>

```typescript
public putSourceConfiguration(value: ElasticbeanstalkConfigurationTemplateSourceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```typescript
public resetEnvironmentId(): void
```

##### `resetOptionSettings` <a name="resetOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings"></a>

```typescript
public resetOptionSettings(): void
```

##### `resetPlatformArn` <a name="resetPlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn"></a>

```typescript
public resetPlatformArn(): void
```

##### `resetSolutionStackName` <a name="resetSolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```typescript
public resetSolutionStackName(): void
```

##### `resetSourceConfiguration` <a name="resetSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration"></a>

```typescript
public resetSourceConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticbeanstalkConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticbeanstalkConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings">optionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput">optionSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput">platformArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput">solutionStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput">sourceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn">platformArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `optionSettings`<sup>Required</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings"></a>

```typescript
public readonly optionSettings: ElasticbeanstalkConfigurationTemplateOptionSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a>

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration"></a>

```typescript
public readonly sourceConfiguration: ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `optionSettingsInput`<sup>Optional</sup> <a name="optionSettingsInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput"></a>

```typescript
public readonly optionSettingsInput: IResolvable | ElasticbeanstalkConfigurationTemplateOptionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]

---

##### `platformArnInput`<sup>Optional</sup> <a name="platformArnInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput"></a>

```typescript
public readonly platformArnInput: string;
```

- *Type:* string

---

##### `solutionStackNameInput`<sup>Optional</sup> <a name="solutionStackNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```typescript
public readonly solutionStackNameInput: string;
```

- *Type:* string

---

##### `sourceConfigurationInput`<sup>Optional</sup> <a name="sourceConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput"></a>

```typescript
public readonly sourceConfigurationInput: IResolvable | ElasticbeanstalkConfigurationTemplateSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `platformArn`<sup>Required</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn"></a>

```typescript
public readonly platformArn: string;
```

- *Type:* string

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkConfigurationTemplateConfig <a name="ElasticbeanstalkConfigurationTemplateConfig" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.Initializer"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

const elasticbeanstalkConfigurationTemplateConfig: elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the Elastic Beanstalk application to associate with this configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description">description</a></code> | <code>string</code> | An optional description for this configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId">environmentId</a></code> | <code>string</code> | The ID of an environment whose settings you want to use to create the configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings">optionSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]</code> | Option values for the Elastic Beanstalk configuration, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn">platformArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the custom platform. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | An Elastic Beanstalk configuration template to base this one on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the Elastic Beanstalk application to associate with this configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#description ElasticbeanstalkConfigurationTemplate#description}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The ID of an environment whose settings you want to use to create the configuration template.

You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#environment_id ElasticbeanstalkConfigurationTemplate#environment_id}

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings"></a>

```typescript
public readonly optionSettings: IResolvable | ElasticbeanstalkConfigurationTemplateOptionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]

Option values for the Elastic Beanstalk configuration, such as the instance type.

If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_settings ElasticbeanstalkConfigurationTemplate#option_settings}

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn"></a>

```typescript
public readonly platformArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the custom platform.

For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#platform_arn ElasticbeanstalkConfigurationTemplate#platform_arn}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.

For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.

 You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.

 Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#solution_stack_name ElasticbeanstalkConfigurationTemplate#solution_stack_name}

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration"></a>

```typescript
public readonly sourceConfiguration: ElasticbeanstalkConfigurationTemplateSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

An Elastic Beanstalk configuration template to base this one on.

If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.

Values specified in OptionSettings override any values obtained from the SourceConfiguration.

You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.

Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#source_configuration ElasticbeanstalkConfigurationTemplate#source_configuration}

---

### ElasticbeanstalkConfigurationTemplateOptionSettings <a name="ElasticbeanstalkConfigurationTemplateOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.Initializer"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

const elasticbeanstalkConfigurationTemplateOptionSettings: elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace">namespace</a></code> | <code>string</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName">optionName</a></code> | <code>string</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName">resourceName</a></code> | <code>string</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value">value</a></code> | <code>string</code> | The current value for the configuration option. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#namespace ElasticbeanstalkConfigurationTemplate#namespace}

---

##### `optionName`<sup>Optional</sup> <a name="optionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName"></a>

```typescript
public readonly optionName: string;
```

- *Type:* string

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_name ElasticbeanstalkConfigurationTemplate#option_name}

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#resource_name ElasticbeanstalkConfigurationTemplate#resource_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#value ElasticbeanstalkConfigurationTemplate#value}

---

### ElasticbeanstalkConfigurationTemplateSourceConfiguration <a name="ElasticbeanstalkConfigurationTemplateSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.Initializer"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

const elasticbeanstalkConfigurationTemplateSourceConfiguration: elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the application associated with the configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName">templateName</a></code> | <code>string</code> | The name of the configuration template. |

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the application associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The name of the configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#template_name ElasticbeanstalkConfigurationTemplate#template_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkConfigurationTemplateOptionSettingsList <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

new elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get"></a>

```typescript
public get(index: number): ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkConfigurationTemplateOptionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]

---


### ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

new elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName">resetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOptionName` <a name="resetOptionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName"></a>

```typescript
public resetOptionName(): void
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput">optionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName">optionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `optionNameInput`<sup>Optional</sup> <a name="optionNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput"></a>

```typescript
public readonly optionNameInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName"></a>

```typescript
public readonly optionName: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkConfigurationTemplateOptionSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>

---


### ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference <a name="ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

new elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName">resetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName">resetTemplateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationName` <a name="resetApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName"></a>

```typescript
public resetApplicationName(): void
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName"></a>

```typescript
public resetTemplateName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkConfigurationTemplateSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---



