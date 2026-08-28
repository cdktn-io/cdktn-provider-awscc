# `securitylakeDataLake` Submodule <a name="`securitylakeDataLake` Submodule" id="@cdktn/provider-awscc.securitylakeDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeDataLake <a name="SecuritylakeDataLake" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake awscc_securitylake_data_lake}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLake(scope: Construct, id: string, config?: SecuritylakeDataLakeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetMetaStoreManagerRoleArn">resetMetaStoreManagerRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: SecuritylakeDataLakeEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration"></a>

```typescript
public putLifecycleConfiguration(value: SecuritylakeDataLakeLifecycleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: SecuritylakeDataLakeReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags"></a>

```typescript
public putTags(value: IResolvable | SecuritylakeDataLakeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetLifecycleConfiguration"></a>

```typescript
public resetLifecycleConfiguration(): void
```

##### `resetMetaStoreManagerRoleArn` <a name="resetMetaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetMetaStoreManagerRoleArn"></a>

```typescript
public resetMetaStoreManagerRoleArn(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecuritylakeDataLake resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

securitylakeDataLake.SecuritylakeDataLake.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

securitylakeDataLake.SecuritylakeDataLake.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

securitylakeDataLake.SecuritylakeDataLake.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecuritylakeDataLake resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeDataLake to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeDataLake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeDataLake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference">SecuritylakeDataLakeEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference">SecuritylakeDataLakeLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference">SecuritylakeDataLakeReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList">SecuritylakeDataLakeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput">metaStoreManagerRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn">metaStoreManagerRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: SecuritylakeDataLakeEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference">SecuritylakeDataLakeEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: SecuritylakeDataLakeLifecycleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference">SecuritylakeDataLakeLifecycleConfigurationOutputReference</a>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: SecuritylakeDataLakeReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference">SecuritylakeDataLakeReplicationConfigurationOutputReference</a>

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tags"></a>

```typescript
public readonly tags: SecuritylakeDataLakeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList">SecuritylakeDataLakeTagsList</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | SecuritylakeDataLakeEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfigurationInput"></a>

```typescript
public readonly lifecycleConfigurationInput: IResolvable | SecuritylakeDataLakeLifecycleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

---

##### `metaStoreManagerRoleArnInput`<sup>Optional</sup> <a name="metaStoreManagerRoleArnInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput"></a>

```typescript
public readonly metaStoreManagerRoleArnInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: IResolvable | SecuritylakeDataLakeReplicationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SecuritylakeDataLakeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]

---

##### `metaStoreManagerRoleArn`<sup>Required</sup> <a name="metaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn"></a>

```typescript
public readonly metaStoreManagerRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeDataLakeConfig <a name="SecuritylakeDataLakeConfig" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

const securitylakeDataLakeConfig: securitylakeDataLake.SecuritylakeDataLakeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a></code> | Provides encryption details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a></code> | Provides lifecycle details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn">metaStoreManagerRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) used to index AWS Glue table partitions that are generated by the ingestion and normalization of AWS log sources and custom sources. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a></code> | Provides replication details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: SecuritylakeDataLakeEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

Provides encryption details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: SecuritylakeDataLakeLifecycleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

Provides lifecycle details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#lifecycle_configuration SecuritylakeDataLake#lifecycle_configuration}

---

##### `metaStoreManagerRoleArn`<sup>Optional</sup> <a name="metaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn"></a>

```typescript
public readonly metaStoreManagerRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) used to index AWS Glue table partitions that are generated by the ingestion and normalization of AWS log sources and custom sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: SecuritylakeDataLakeReplicationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

Provides replication details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#replication_configuration SecuritylakeDataLake#replication_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SecuritylakeDataLakeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}.

---

### SecuritylakeDataLakeEncryptionConfiguration <a name="SecuritylakeDataLakeEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

const securitylakeDataLakeEncryptionConfiguration: securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}

---

### SecuritylakeDataLakeLifecycleConfiguration <a name="SecuritylakeDataLakeLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

const securitylakeDataLakeLifecycleConfiguration: securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | Provides data expiration details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.transitions">transitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]</code> | Provides data storage transition details of Amazon Security Lake object. |

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.expiration"></a>

```typescript
public readonly expiration: SecuritylakeDataLakeLifecycleConfigurationExpiration;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

Provides data expiration details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#expiration SecuritylakeDataLake#expiration}

---

##### `transitions`<sup>Optional</sup> <a name="transitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.transitions"></a>

```typescript
public readonly transitions: IResolvable | SecuritylakeDataLakeLifecycleConfigurationTransitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]

Provides data storage transition details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#transitions SecuritylakeDataLake#transitions}

---

### SecuritylakeDataLakeLifecycleConfigurationExpiration <a name="SecuritylakeDataLakeLifecycleConfigurationExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

const securitylakeDataLakeLifecycleConfigurationExpiration: securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.property.days">days</a></code> | <code>number</code> | Number of days before data expires in the Amazon Security Lake object. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Number of days before data expires in the Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}

---

### SecuritylakeDataLakeLifecycleConfigurationTransitions <a name="SecuritylakeDataLakeLifecycleConfigurationTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

const securitylakeDataLakeLifecycleConfigurationTransitions: securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.days">days</a></code> | <code>number</code> | Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.storageClass">storageClass</a></code> | <code>string</code> | The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}

---

### SecuritylakeDataLakeReplicationConfiguration <a name="SecuritylakeDataLakeReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

const securitylakeDataLakeReplicationConfiguration: securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.regions">regions</a></code> | <code>string[]</code> | Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Replication settings for the Amazon S3 buckets. |

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets.

Amazon S3 buckets that are configured for object replication can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different AWS Regions or within the same Region as the source bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Replication settings for the Amazon S3 buckets.

This parameter uses the AWS Identity and Access Management (IAM) role you created that is managed by Security Lake, to ensure the replication setting is correct.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}

---

### SecuritylakeDataLakeTags <a name="SecuritylakeDataLakeTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

const securitylakeDataLakeTags: securitylakeDataLake.SecuritylakeDataLakeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#key SecuritylakeDataLake#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#value SecuritylakeDataLake#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeDataLakeEncryptionConfigurationOutputReference <a name="SecuritylakeDataLakeEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

---


### SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeLifecycleConfigurationExpiration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---


### SecuritylakeDataLakeLifecycleConfigurationOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions">putTransitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetTransitions">resetTransitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration"></a>

```typescript
public putExpiration(value: SecuritylakeDataLakeLifecycleConfigurationExpiration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---

##### `putTransitions` <a name="putTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions"></a>

```typescript
public putTransitions(value: IResolvable | SecuritylakeDataLakeLifecycleConfigurationTransitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetTransitions` <a name="resetTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetTransitions"></a>

```typescript
public resetTransitions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions">transitions</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList">SecuritylakeDataLakeLifecycleConfigurationTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expirationInput">expirationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitionsInput">transitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration"></a>

```typescript
public readonly expiration: SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a>

---

##### `transitions`<sup>Required</sup> <a name="transitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions"></a>

```typescript
public readonly transitions: SecuritylakeDataLakeLifecycleConfigurationTransitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList">SecuritylakeDataLakeLifecycleConfigurationTransitionsList</a>

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: IResolvable | SecuritylakeDataLakeLifecycleConfigurationExpiration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---

##### `transitionsInput`<sup>Optional</sup> <a name="transitionsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitionsInput"></a>

```typescript
public readonly transitionsInput: IResolvable | SecuritylakeDataLakeLifecycleConfigurationTransitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeLifecycleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

---


### SecuritylakeDataLakeLifecycleConfigurationTransitionsList <a name="SecuritylakeDataLakeLifecycleConfigurationTransitionsList" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get"></a>

```typescript
public get(index: number): SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeLifecycleConfigurationTransitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]

---


### SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeLifecycleConfigurationTransitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>

---


### SecuritylakeDataLakeReplicationConfigurationOutputReference <a name="SecuritylakeDataLakeReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeReplicationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

---


### SecuritylakeDataLakeTagsList <a name="SecuritylakeDataLakeTagsList" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLakeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get"></a>

```typescript
public get(index: number): SecuritylakeDataLakeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]

---


### SecuritylakeDataLakeTagsOutputReference <a name="SecuritylakeDataLakeTagsOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer"></a>

```typescript
import { securitylakeDataLake } from '@cdktn/provider-awscc'

new securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeDataLakeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>

---



