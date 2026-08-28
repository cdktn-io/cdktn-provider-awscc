# `mgnNetworkMigrationDefinition` Submodule <a name="`mgnNetworkMigrationDefinition` Submodule" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnNetworkMigrationDefinition <a name="MgnNetworkMigrationDefinition" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition awscc_mgn_network_migration_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition(scope: Construct, id: string, config: MgnNetworkMigrationDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig">MgnNetworkMigrationDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig">MgnNetworkMigrationDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations">putSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork">putTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration">putTargetS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetScopeTags">resetScopeTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTargetDeployment">resetTargetDeployment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceConfigurations` <a name="putSourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations"></a>

```typescript
public putSourceConfigurations(value: IResolvable | MgnNetworkMigrationDefinitionSourceConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags"></a>

```typescript
public putTags(value: IResolvable | MgnNetworkMigrationDefinitionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]

---

##### `putTargetNetwork` <a name="putTargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork"></a>

```typescript
public putTargetNetwork(value: MgnNetworkMigrationDefinitionTargetNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

---

##### `putTargetS3Configuration` <a name="putTargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration"></a>

```typescript
public putTargetS3Configuration(value: MgnNetworkMigrationDefinitionTargetS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetScopeTags` <a name="resetScopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetScopeTags"></a>

```typescript
public resetScopeTags(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetDeployment` <a name="resetTargetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTargetDeployment"></a>

```typescript
public resetTargetDeployment(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MgnNetworkMigrationDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MgnNetworkMigrationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MgnNetworkMigrationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.networkMigrationDefinitionId">networkMigrationDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurations">sourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList">MgnNetworkMigrationDefinitionSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList">MgnNetworkMigrationDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetwork">targetNetwork</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference">MgnNetworkMigrationDefinitionTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3Configuration">targetS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTagsInput">scopeTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurationsInput">sourceConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeploymentInput">targetDeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetworkInput">targetNetworkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3ConfigurationInput">targetS3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTags">scopeTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeployment">targetDeployment</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkMigrationDefinitionId`<sup>Required</sup> <a name="networkMigrationDefinitionId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.networkMigrationDefinitionId"></a>

```typescript
public readonly networkMigrationDefinitionId: string;
```

- *Type:* string

---

##### `sourceConfigurations`<sup>Required</sup> <a name="sourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurations"></a>

```typescript
public readonly sourceConfigurations: MgnNetworkMigrationDefinitionSourceConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList">MgnNetworkMigrationDefinitionSourceConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tags"></a>

```typescript
public readonly tags: MgnNetworkMigrationDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList">MgnNetworkMigrationDefinitionTagsList</a>

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: MgnNetworkMigrationDefinitionTargetNetworkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference">MgnNetworkMigrationDefinitionTargetNetworkOutputReference</a>

---

##### `targetS3Configuration`<sup>Required</sup> <a name="targetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3Configuration"></a>

```typescript
public readonly targetS3Configuration: MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeTagsInput`<sup>Optional</sup> <a name="scopeTagsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTagsInput"></a>

```typescript
public readonly scopeTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sourceConfigurationsInput`<sup>Optional</sup> <a name="sourceConfigurationsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurationsInput"></a>

```typescript
public readonly sourceConfigurationsInput: IResolvable | MgnNetworkMigrationDefinitionSourceConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MgnNetworkMigrationDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]

---

##### `targetDeploymentInput`<sup>Optional</sup> <a name="targetDeploymentInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeploymentInput"></a>

```typescript
public readonly targetDeploymentInput: string;
```

- *Type:* string

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetworkInput"></a>

```typescript
public readonly targetNetworkInput: IResolvable | MgnNetworkMigrationDefinitionTargetNetwork;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

---

##### `targetS3ConfigurationInput`<sup>Optional</sup> <a name="targetS3ConfigurationInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3ConfigurationInput"></a>

```typescript
public readonly targetS3ConfigurationInput: IResolvable | MgnNetworkMigrationDefinitionTargetS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopeTags`<sup>Required</sup> <a name="scopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTags"></a>

```typescript
public readonly scopeTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetDeployment`<sup>Required</sup> <a name="targetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeployment"></a>

```typescript
public readonly targetDeployment: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MgnNetworkMigrationDefinitionConfig <a name="MgnNetworkMigrationDefinitionConfig" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const mgnNetworkMigrationDefinitionConfig: mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.name">name</a></code> | <code>string</code> | The name of the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.sourceConfigurations">sourceConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]</code> | A list of source configurations for the network migration. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetNetwork">targetNetwork</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a></code> | The target network configuration including topology and CIDR ranges. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetS3Configuration">targetS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | The S3 configuration for storing the target network artifacts. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.description">description</a></code> | <code>string</code> | A description of the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.scopeTags">scopeTags</a></code> | <code>{[ key: string ]: string}</code> | Scope tags for the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]</code> | Tags to assign to the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetDeployment">targetDeployment</a></code> | <code>string</code> | The target deployment configuration for the migrated network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#name MgnNetworkMigrationDefinition#name}

---

##### `sourceConfigurations`<sup>Required</sup> <a name="sourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.sourceConfigurations"></a>

```typescript
public readonly sourceConfigurations: IResolvable | MgnNetworkMigrationDefinitionSourceConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]

A list of source configurations for the network migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_configurations MgnNetworkMigrationDefinition#source_configurations}

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: MgnNetworkMigrationDefinitionTargetNetwork;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

The target network configuration including topology and CIDR ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_network MgnNetworkMigrationDefinition#target_network}

---

##### `targetS3Configuration`<sup>Required</sup> <a name="targetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetS3Configuration"></a>

```typescript
public readonly targetS3Configuration: MgnNetworkMigrationDefinitionTargetS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

The S3 configuration for storing the target network artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_s3_configuration MgnNetworkMigrationDefinition#target_s3_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#description MgnNetworkMigrationDefinition#description}

---

##### `scopeTags`<sup>Optional</sup> <a name="scopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.scopeTags"></a>

```typescript
public readonly scopeTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Scope tags for the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#scope_tags MgnNetworkMigrationDefinition#scope_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MgnNetworkMigrationDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]

Tags to assign to the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#tags MgnNetworkMigrationDefinition#tags}

---

##### `targetDeployment`<sup>Optional</sup> <a name="targetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetDeployment"></a>

```typescript
public readonly targetDeployment: string;
```

- *Type:* string

The target deployment configuration for the migrated network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_deployment MgnNetworkMigrationDefinition#target_deployment}

---

### MgnNetworkMigrationDefinitionSourceConfigurations <a name="MgnNetworkMigrationDefinitionSourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const mgnNetworkMigrationDefinitionSourceConfigurations: mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceEnvironment">sourceEnvironment</a></code> | <code>string</code> | The source environment type. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceS3Configuration">sourceS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | S3 configuration for source network data. |

---

##### `sourceEnvironment`<sup>Required</sup> <a name="sourceEnvironment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceEnvironment"></a>

```typescript
public readonly sourceEnvironment: string;
```

- *Type:* string

The source environment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_environment MgnNetworkMigrationDefinition#source_environment}

---

##### `sourceS3Configuration`<sup>Required</sup> <a name="sourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceS3Configuration"></a>

```typescript
public readonly sourceS3Configuration: MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

S3 configuration for source network data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_s3_configuration MgnNetworkMigrationDefinition#source_s3_configuration}

---

### MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration <a name="MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const mgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration: mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The name of the S3 bucket containing source data. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | The AWS account ID of the S3 bucket owner. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Key">s3Key</a></code> | <code>string</code> | The S3 key (path) for the source data. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The name of the S3 bucket containing source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket MgnNetworkMigrationDefinition#s3_bucket}

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

The AWS account ID of the S3 bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket_owner MgnNetworkMigrationDefinition#s3_bucket_owner}

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

The S3 key (path) for the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_key MgnNetworkMigrationDefinition#s3_key}

---

### MgnNetworkMigrationDefinitionTags <a name="MgnNetworkMigrationDefinitionTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const mgnNetworkMigrationDefinitionTags: mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#key MgnNetworkMigrationDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#value MgnNetworkMigrationDefinition#value}

---

### MgnNetworkMigrationDefinitionTargetNetwork <a name="MgnNetworkMigrationDefinitionTargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const mgnNetworkMigrationDefinitionTargetNetwork: mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.topology">topology</a></code> | <code>string</code> | The network topology type for the target environment. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inboundCidr">inboundCidr</a></code> | <code>string</code> | The CIDR block for inbound traffic in the target network. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inspectionCidr">inspectionCidr</a></code> | <code>string</code> | The CIDR block for inspection traffic in the target network. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.outboundCidr">outboundCidr</a></code> | <code>string</code> | The CIDR block for outbound traffic in the target network. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.topology"></a>

```typescript
public readonly topology: string;
```

- *Type:* string

The network topology type for the target environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#topology MgnNetworkMigrationDefinition#topology}

---

##### `inboundCidr`<sup>Optional</sup> <a name="inboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inboundCidr"></a>

```typescript
public readonly inboundCidr: string;
```

- *Type:* string

The CIDR block for inbound traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#inbound_cidr MgnNetworkMigrationDefinition#inbound_cidr}

---

##### `inspectionCidr`<sup>Optional</sup> <a name="inspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inspectionCidr"></a>

```typescript
public readonly inspectionCidr: string;
```

- *Type:* string

The CIDR block for inspection traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#inspection_cidr MgnNetworkMigrationDefinition#inspection_cidr}

---

##### `outboundCidr`<sup>Optional</sup> <a name="outboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.outboundCidr"></a>

```typescript
public readonly outboundCidr: string;
```

- *Type:* string

The CIDR block for outbound traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#outbound_cidr MgnNetworkMigrationDefinition#outbound_cidr}

---

### MgnNetworkMigrationDefinitionTargetS3Configuration <a name="MgnNetworkMigrationDefinitionTargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const mgnNetworkMigrationDefinitionTargetS3Configuration: mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The name of the S3 bucket for target artifacts. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | The AWS account ID of the S3 bucket owner. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The name of the S3 bucket for target artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket MgnNetworkMigrationDefinition#s3_bucket}

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

The AWS account ID of the S3 bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket_owner MgnNetworkMigrationDefinition#s3_bucket_owner}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnNetworkMigrationDefinitionSourceConfigurationsList <a name="MgnNetworkMigrationDefinitionSourceConfigurationsList" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get"></a>

```typescript
public get(index: number): MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnNetworkMigrationDefinitionSourceConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]

---


### MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference <a name="MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration">putSourceS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceS3Configuration` <a name="putSourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration"></a>

```typescript
public putSourceS3Configuration(value: MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration">sourceS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironmentInput">sourceEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3ConfigurationInput">sourceS3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment">sourceEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceS3Configuration`<sup>Required</sup> <a name="sourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration"></a>

```typescript
public readonly sourceS3Configuration: MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a>

---

##### `sourceEnvironmentInput`<sup>Optional</sup> <a name="sourceEnvironmentInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironmentInput"></a>

```typescript
public readonly sourceEnvironmentInput: string;
```

- *Type:* string

---

##### `sourceS3ConfigurationInput`<sup>Optional</sup> <a name="sourceS3ConfigurationInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3ConfigurationInput"></a>

```typescript
public readonly sourceS3ConfigurationInput: IResolvable | MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---

##### `sourceEnvironment`<sup>Required</sup> <a name="sourceEnvironment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment"></a>

```typescript
public readonly sourceEnvironment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnNetworkMigrationDefinitionSourceConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>

---


### MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference <a name="MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwnerInput">s3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3BucketOwnerInput`<sup>Optional</sup> <a name="s3BucketOwnerInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwnerInput"></a>

```typescript
public readonly s3BucketOwnerInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---


### MgnNetworkMigrationDefinitionTagsList <a name="MgnNetworkMigrationDefinitionTagsList" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get"></a>

```typescript
public get(index: number): MgnNetworkMigrationDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnNetworkMigrationDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]

---


### MgnNetworkMigrationDefinitionTagsOutputReference <a name="MgnNetworkMigrationDefinitionTagsOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnNetworkMigrationDefinitionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>

---


### MgnNetworkMigrationDefinitionTargetNetworkOutputReference <a name="MgnNetworkMigrationDefinitionTargetNetworkOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInboundCidr">resetInboundCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInspectionCidr">resetInspectionCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetOutboundCidr">resetOutboundCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInboundCidr` <a name="resetInboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInboundCidr"></a>

```typescript
public resetInboundCidr(): void
```

##### `resetInspectionCidr` <a name="resetInspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInspectionCidr"></a>

```typescript
public resetInspectionCidr(): void
```

##### `resetOutboundCidr` <a name="resetOutboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetOutboundCidr"></a>

```typescript
public resetOutboundCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidrInput">inboundCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidrInput">inspectionCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidrInput">outboundCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topologyInput">topologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr">inboundCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr">inspectionCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr">outboundCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology">topology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inboundCidrInput`<sup>Optional</sup> <a name="inboundCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidrInput"></a>

```typescript
public readonly inboundCidrInput: string;
```

- *Type:* string

---

##### `inspectionCidrInput`<sup>Optional</sup> <a name="inspectionCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidrInput"></a>

```typescript
public readonly inspectionCidrInput: string;
```

- *Type:* string

---

##### `outboundCidrInput`<sup>Optional</sup> <a name="outboundCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidrInput"></a>

```typescript
public readonly outboundCidrInput: string;
```

- *Type:* string

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topologyInput"></a>

```typescript
public readonly topologyInput: string;
```

- *Type:* string

---

##### `inboundCidr`<sup>Required</sup> <a name="inboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr"></a>

```typescript
public readonly inboundCidr: string;
```

- *Type:* string

---

##### `inspectionCidr`<sup>Required</sup> <a name="inspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr"></a>

```typescript
public readonly inspectionCidr: string;
```

- *Type:* string

---

##### `outboundCidr`<sup>Required</sup> <a name="outboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr"></a>

```typescript
public readonly outboundCidr: string;
```

- *Type:* string

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology"></a>

```typescript
public readonly topology: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnNetworkMigrationDefinitionTargetNetwork;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

---


### MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference <a name="MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { mgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwnerInput">s3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3BucketOwnerInput`<sup>Optional</sup> <a name="s3BucketOwnerInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwnerInput"></a>

```typescript
public readonly s3BucketOwnerInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnNetworkMigrationDefinitionTargetS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

---



