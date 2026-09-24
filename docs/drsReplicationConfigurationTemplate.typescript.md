# `drsReplicationConfigurationTemplate` Submodule <a name="`drsReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsReplicationConfigurationTemplate <a name="DrsReplicationConfigurationTemplate" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template awscc_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate(scope: Construct, id: string, config: DrsReplicationConfigurationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig">DrsReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig">DrsReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy">putPitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAssociateDefaultSecurityGroup">resetAssociateDefaultSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks">resetAutoReplicateNewDisks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetCreatePublicIp">resetCreatePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDataPlaneRouting">resetDataPlaneRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDefaultLargeStagingDiskType">resetDefaultLargeStagingDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">resetEbsEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetInternetProtocol">resetInternetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetReplicationServerInstanceType">resetReplicationServerInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetUseDedicatedReplicationServer">resetUseDedicatedReplicationServer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPitPolicy` <a name="putPitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy"></a>

```typescript
public putPitPolicy(value: IResolvable | DrsReplicationConfigurationTemplatePitPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | DrsReplicationConfigurationTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]

---

##### `resetAssociateDefaultSecurityGroup` <a name="resetAssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAssociateDefaultSecurityGroup"></a>

```typescript
public resetAssociateDefaultSecurityGroup(): void
```

##### `resetAutoReplicateNewDisks` <a name="resetAutoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks"></a>

```typescript
public resetAutoReplicateNewDisks(): void
```

##### `resetCreatePublicIp` <a name="resetCreatePublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetCreatePublicIp"></a>

```typescript
public resetCreatePublicIp(): void
```

##### `resetDataPlaneRouting` <a name="resetDataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDataPlaneRouting"></a>

```typescript
public resetDataPlaneRouting(): void
```

##### `resetDefaultLargeStagingDiskType` <a name="resetDefaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDefaultLargeStagingDiskType"></a>

```typescript
public resetDefaultLargeStagingDiskType(): void
```

##### `resetEbsEncryptionKeyArn` <a name="resetEbsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```typescript
public resetEbsEncryptionKeyArn(): void
```

##### `resetInternetProtocol` <a name="resetInternetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetInternetProtocol"></a>

```typescript
public resetInternetProtocol(): void
```

##### `resetReplicationServerInstanceType` <a name="resetReplicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetReplicationServerInstanceType"></a>

```typescript
public resetReplicationServerInstanceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUseDedicatedReplicationServer` <a name="resetUseDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetUseDedicatedReplicationServer"></a>

```typescript
public resetUseDedicatedReplicationServer(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrsReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy">pitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList">DrsReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">associateDefaultSecurityGroupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput">autoReplicateNewDisksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput">bandwidthThrottlingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput">createPublicIpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput">dataPlaneRoutingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">defaultLargeStagingDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput">ebsEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">ebsEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocolInput">internetProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput">pitPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">replicationServerInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput">replicationServersSecurityGroupsIDsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">stagingAreaSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput">stagingAreaTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">useDedicatedReplicationServerInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">autoReplicateNewDisks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp">createPublicIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption">ebsEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocol">internetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags">stagingAreaTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pitPolicy`<sup>Required</sup> <a name="pitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```typescript
public readonly pitPolicy: DrsReplicationConfigurationTemplatePitPolicyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```typescript
public readonly replicationConfigurationTemplateId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags"></a>

```typescript
public readonly tags: DrsReplicationConfigurationTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList">DrsReplicationConfigurationTemplateTagsList</a>

---

##### `associateDefaultSecurityGroupInput`<sup>Optional</sup> <a name="associateDefaultSecurityGroupInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```typescript
public readonly associateDefaultSecurityGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoReplicateNewDisksInput`<sup>Optional</sup> <a name="autoReplicateNewDisksInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput"></a>

```typescript
public readonly autoReplicateNewDisksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bandwidthThrottlingInput`<sup>Optional</sup> <a name="bandwidthThrottlingInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```typescript
public readonly bandwidthThrottlingInput: number;
```

- *Type:* number

---

##### `createPublicIpInput`<sup>Optional</sup> <a name="createPublicIpInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```typescript
public readonly createPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataPlaneRoutingInput`<sup>Optional</sup> <a name="dataPlaneRoutingInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```typescript
public readonly dataPlaneRoutingInput: string;
```

- *Type:* string

---

##### `defaultLargeStagingDiskTypeInput`<sup>Optional</sup> <a name="defaultLargeStagingDiskTypeInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```typescript
public readonly defaultLargeStagingDiskTypeInput: string;
```

- *Type:* string

---

##### `ebsEncryptionInput`<sup>Optional</sup> <a name="ebsEncryptionInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```typescript
public readonly ebsEncryptionInput: string;
```

- *Type:* string

---

##### `ebsEncryptionKeyArnInput`<sup>Optional</sup> <a name="ebsEncryptionKeyArnInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```typescript
public readonly ebsEncryptionKeyArnInput: string;
```

- *Type:* string

---

##### `internetProtocolInput`<sup>Optional</sup> <a name="internetProtocolInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocolInput"></a>

```typescript
public readonly internetProtocolInput: string;
```

- *Type:* string

---

##### `pitPolicyInput`<sup>Optional</sup> <a name="pitPolicyInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput"></a>

```typescript
public readonly pitPolicyInput: IResolvable | DrsReplicationConfigurationTemplatePitPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]

---

##### `replicationServerInstanceTypeInput`<sup>Optional</sup> <a name="replicationServerInstanceTypeInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```typescript
public readonly replicationServerInstanceTypeInput: string;
```

- *Type:* string

---

##### `replicationServersSecurityGroupsIDsInput`<sup>Optional</sup> <a name="replicationServersSecurityGroupsIDsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput"></a>

```typescript
public readonly replicationServersSecurityGroupsIDsInput: string[];
```

- *Type:* string[]

---

##### `stagingAreaSubnetIdInput`<sup>Optional</sup> <a name="stagingAreaSubnetIdInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```typescript
public readonly stagingAreaSubnetIdInput: string;
```

- *Type:* string

---

##### `stagingAreaTagsInput`<sup>Optional</sup> <a name="stagingAreaTagsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```typescript
public readonly stagingAreaTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DrsReplicationConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]

---

##### `useDedicatedReplicationServerInput`<sup>Optional</sup> <a name="useDedicatedReplicationServerInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```typescript
public readonly useDedicatedReplicationServerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```typescript
public readonly associateDefaultSecurityGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoReplicateNewDisks`<sup>Required</sup> <a name="autoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```typescript
public readonly autoReplicateNewDisks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```typescript
public readonly bandwidthThrottling: number;
```

- *Type:* number

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```typescript
public readonly createPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```typescript
public readonly dataPlaneRouting: string;
```

- *Type:* string

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```typescript
public readonly defaultLargeStagingDiskType: string;
```

- *Type:* string

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```typescript
public readonly ebsEncryption: string;
```

- *Type:* string

---

##### `ebsEncryptionKeyArn`<sup>Required</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```typescript
public readonly ebsEncryptionKeyArn: string;
```

- *Type:* string

---

##### `internetProtocol`<sup>Required</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocol"></a>

```typescript
public readonly internetProtocol: string;
```

- *Type:* string

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```typescript
public readonly replicationServerInstanceType: string;
```

- *Type:* string

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```typescript
public readonly replicationServersSecurityGroupsIDs: string[];
```

- *Type:* string[]

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```typescript
public readonly stagingAreaSubnetId: string;
```

- *Type:* string

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```typescript
public readonly stagingAreaTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```typescript
public readonly useDedicatedReplicationServer: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsReplicationConfigurationTemplateConfig <a name="DrsReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.Initializer"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const drsReplicationConfigurationTemplateConfig: drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>number</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption">ebsEncryption</a></code> | <code>string</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy">pitPolicy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]</code> | The Point in time (PIT) policy to manage snapshots taken during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>string</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags">stagingAreaTags</a></code> | <code>{[ key: string ]: string}</code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks">autoReplicateNewDisks</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to allow the AWS replication agent to automatically replicate newly added disks. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp">createPublicIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>string</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>string</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>string</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.internetProtocol">internetProtocol</a></code> | <code>string</code> | Which version of the Internet Protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>string</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]</code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```typescript
public readonly bandwidthThrottling: number;
```

- *Type:* number

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```typescript
public readonly ebsEncryption: string;
```

- *Type:* string

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}

---

##### `pitPolicy`<sup>Required</sup> <a name="pitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy"></a>

```typescript
public readonly pitPolicy: IResolvable | DrsReplicationConfigurationTemplatePitPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]

The Point in time (PIT) policy to manage snapshots taken during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs"></a>

```typescript
public readonly replicationServersSecurityGroupsIDs: string[];
```

- *Type:* string[]

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_i_ds DrsReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```typescript
public readonly stagingAreaSubnetId: string;
```

- *Type:* string

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```typescript
public readonly stagingAreaTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}

---

##### `associateDefaultSecurityGroup`<sup>Optional</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```typescript
public readonly associateDefaultSecurityGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}

---

##### `autoReplicateNewDisks`<sup>Optional</sup> <a name="autoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks"></a>

```typescript
public readonly autoReplicateNewDisks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to allow the AWS replication agent to automatically replicate newly added disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}

---

##### `createPublicIp`<sup>Optional</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```typescript
public readonly createPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}

---

##### `dataPlaneRouting`<sup>Optional</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```typescript
public readonly dataPlaneRouting: string;
```

- *Type:* string

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}

---

##### `defaultLargeStagingDiskType`<sup>Optional</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```typescript
public readonly defaultLargeStagingDiskType: string;
```

- *Type:* string

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebsEncryptionKeyArn`<sup>Optional</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```typescript
public readonly ebsEncryptionKeyArn: string;
```

- *Type:* string

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internetProtocol`<sup>Optional</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.internetProtocol"></a>

```typescript
public readonly internetProtocol: string;
```

- *Type:* string

Which version of the Internet Protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#internet_protocol DrsReplicationConfigurationTemplate#internet_protocol}

---

##### `replicationServerInstanceType`<sup>Optional</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```typescript
public readonly replicationServerInstanceType: string;
```

- *Type:* string

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DrsReplicationConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}

---

##### `useDedicatedReplicationServer`<sup>Optional</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```typescript
public readonly useDedicatedReplicationServer: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}

---

### DrsReplicationConfigurationTemplatePitPolicy <a name="DrsReplicationConfigurationTemplatePitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const drsReplicationConfigurationTemplatePitPolicy: drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval">interval</a></code> | <code>number</code> | How often, in the chosen units, a snapshot should be taken. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration">retentionDuration</a></code> | <code>number</code> | The duration to retain a snapshot for, in the chosen units. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units">units</a></code> | <code>string</code> | The units used to measure the interval and retentionDuration. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this rule is enabled or not. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId">ruleId</a></code> | <code>number</code> | The ID of the rule. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

How often, in the chosen units, a snapshot should be taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#interval DrsReplicationConfigurationTemplate#interval}

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: number;
```

- *Type:* number

The duration to retain a snapshot for, in the chosen units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#retention_duration DrsReplicationConfigurationTemplate#retention_duration}

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

The units used to measure the interval and retentionDuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#units DrsReplicationConfigurationTemplate#units}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this rule is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#enabled DrsReplicationConfigurationTemplate#enabled}

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId"></a>

```typescript
public readonly ruleId: number;
```

- *Type:* number

The ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#rule_id DrsReplicationConfigurationTemplate#rule_id}

---

### DrsReplicationConfigurationTemplateTags <a name="DrsReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.Initializer"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const drsReplicationConfigurationTemplateTags: drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#key DrsReplicationConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#value DrsReplicationConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsReplicationConfigurationTemplatePitPolicyList <a name="DrsReplicationConfigurationTemplatePitPolicyList" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```typescript
public get(index: number): DrsReplicationConfigurationTemplatePitPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DrsReplicationConfigurationTemplatePitPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>[]

---


### DrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId">resetRuleId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId"></a>

```typescript
public resetRuleId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput">retentionDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">retentionDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">ruleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput"></a>

```typescript
public readonly retentionDurationInput: number;
```

- *Type:* number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: number;
```

- *Type:* number

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DrsReplicationConfigurationTemplatePitPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>

---


### DrsReplicationConfigurationTemplateTagsList <a name="DrsReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get"></a>

```typescript
public get(index: number): DrsReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DrsReplicationConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>[]

---


### DrsReplicationConfigurationTemplateTagsOutputReference <a name="DrsReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```typescript
import { drsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DrsReplicationConfigurationTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>

---



