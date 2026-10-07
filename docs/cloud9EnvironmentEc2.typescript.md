# `cloud9EnvironmentEc2` Submodule <a name="`cloud9EnvironmentEc2` Submodule" id="@cdktn/provider-awscc.cloud9EnvironmentEc2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloud9EnvironmentEc2 <a name="Cloud9EnvironmentEc2" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2 awscc_cloud9_environment_ec2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

new cloud9EnvironmentEc2.Cloud9EnvironmentEc2(scope: Construct, id: string, config?: Cloud9EnvironmentEc2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories">putRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes">resetAutomaticStopTimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn">resetOwnerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRepositories` <a name="putRepositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories"></a>

```typescript
public putRepositories(value: IResolvable | Cloud9EnvironmentEc2Repositories[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags"></a>

```typescript
public putTags(value: IResolvable | Cloud9EnvironmentEc2Tags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]

---

##### `resetAutomaticStopTimeMinutes` <a name="resetAutomaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes"></a>

```typescript
public resetAutomaticStopTimeMinutes(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwnerArn` <a name="resetOwnerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn"></a>

```typescript
public resetOwnerArn(): void
```

##### `resetRepositories` <a name="resetRepositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetRepositories"></a>

```typescript
public resetRepositories(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Cloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Cloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cloud9EnvironmentEc2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cloud9EnvironmentEc2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Cloud9EnvironmentEc2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositories">repositories</a></code> | <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList">Cloud9EnvironmentEc2RepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList">Cloud9EnvironmentEc2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput">automaticStopTimeMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput">ownerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositoriesInput">repositoriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes">automaticStopTimeMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn">ownerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositories"></a>

```typescript
public readonly repositories: Cloud9EnvironmentEc2RepositoriesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList">Cloud9EnvironmentEc2RepositoriesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags"></a>

```typescript
public readonly tags: Cloud9EnvironmentEc2TagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList">Cloud9EnvironmentEc2TagsList</a>

---

##### `automaticStopTimeMinutesInput`<sup>Optional</sup> <a name="automaticStopTimeMinutesInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput"></a>

```typescript
public readonly automaticStopTimeMinutesInput: number;
```

- *Type:* number

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerArnInput`<sup>Optional</sup> <a name="ownerArnInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput"></a>

```typescript
public readonly ownerArnInput: string;
```

- *Type:* string

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositoriesInput"></a>

```typescript
public readonly repositoriesInput: IResolvable | Cloud9EnvironmentEc2Repositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Cloud9EnvironmentEc2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]

---

##### `automaticStopTimeMinutes`<sup>Required</sup> <a name="automaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes"></a>

```typescript
public readonly automaticStopTimeMinutes: number;
```

- *Type:* number

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerArn`<sup>Required</sup> <a name="ownerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn"></a>

```typescript
public readonly ownerArn: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentEc2Config <a name="Cloud9EnvironmentEc2Config" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

const cloud9EnvironmentEc2Config: cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes">automaticStopTimeMinutes</a></code> | <code>number</code> | The number of minutes until the running instance is shut down after the environment was last used. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType">connectionType</a></code> | <code>string</code> | The connection type used for connecting to an Amazon EC2 environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description">description</a></code> | <code>string</code> | The description of the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId">imageId</a></code> | <code>string</code> | The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType">instanceType</a></code> | <code>string</code> | The type of instance to connect to the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name">name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn">ownerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the environment owner. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.repositories">repositories</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]</code> | Any AWS CodeCommit source code repositories to be cloned into the development environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId">subnetId</a></code> | <code>string</code> | The ID of the subnet in Amazon VPC that AWS Cloud9 will use. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]</code> | An array of key-value pairs that will be associated with the new AWS Cloud9 development environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `automaticStopTimeMinutes`<sup>Optional</sup> <a name="automaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes"></a>

```typescript
public readonly automaticStopTimeMinutes: number;
```

- *Type:* number

The number of minutes until the running instance is shut down after the environment was last used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

The connection type used for connecting to an Amazon EC2 environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The type of instance to connect to the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}

---

##### `ownerArn`<sup>Optional</sup> <a name="ownerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn"></a>

```typescript
public readonly ownerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the environment owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.repositories"></a>

```typescript
public readonly repositories: IResolvable | Cloud9EnvironmentEc2Repositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]

Any AWS CodeCommit source code repositories to be cloned into the development environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#repositories Cloud9EnvironmentEc2#repositories}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The ID of the subnet in Amazon VPC that AWS Cloud9 will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags"></a>

```typescript
public readonly tags: IResolvable | Cloud9EnvironmentEc2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]

An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}

---

### Cloud9EnvironmentEc2Repositories <a name="Cloud9EnvironmentEc2Repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

const cloud9EnvironmentEc2Repositories: cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.pathComponent">pathComponent</a></code> | <code>string</code> | The path within the development environment's default file system location to clone the AWS CodeCommit repository into. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | The clone URL of the AWS CodeCommit repository to be cloned. |

---

##### `pathComponent`<sup>Optional</sup> <a name="pathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.pathComponent"></a>

```typescript
public readonly pathComponent: string;
```

- *Type:* string

The path within the development environment's default file system location to clone the AWS CodeCommit repository into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#path_component Cloud9EnvironmentEc2#path_component}

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

The clone URL of the AWS CodeCommit repository to be cloned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#repository_url Cloud9EnvironmentEc2#repository_url}

---

### Cloud9EnvironmentEc2Tags <a name="Cloud9EnvironmentEc2Tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

const cloud9EnvironmentEc2Tags: cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#key Cloud9EnvironmentEc2#key}. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#value Cloud9EnvironmentEc2#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#key Cloud9EnvironmentEc2#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloud9_environment_ec2#value Cloud9EnvironmentEc2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloud9EnvironmentEc2RepositoriesList <a name="Cloud9EnvironmentEc2RepositoriesList" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

new cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get"></a>

```typescript
public get(index: number): Cloud9EnvironmentEc2RepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Cloud9EnvironmentEc2Repositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]

---


### Cloud9EnvironmentEc2RepositoriesOutputReference <a name="Cloud9EnvironmentEc2RepositoriesOutputReference" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

new cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetPathComponent">resetPathComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathComponent` <a name="resetPathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetPathComponent"></a>

```typescript
public resetPathComponent(): void
```

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetRepositoryUrl"></a>

```typescript
public resetRepositoryUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponentInput">pathComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponent">pathComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathComponentInput`<sup>Optional</sup> <a name="pathComponentInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponentInput"></a>

```typescript
public readonly pathComponentInput: string;
```

- *Type:* string

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrlInput"></a>

```typescript
public readonly repositoryUrlInput: string;
```

- *Type:* string

---

##### `pathComponent`<sup>Required</sup> <a name="pathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponent"></a>

```typescript
public readonly pathComponent: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Cloud9EnvironmentEc2Repositories;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>

---


### Cloud9EnvironmentEc2TagsList <a name="Cloud9EnvironmentEc2TagsList" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

new cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get"></a>

```typescript
public get(index: number): Cloud9EnvironmentEc2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Cloud9EnvironmentEc2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]

---


### Cloud9EnvironmentEc2TagsOutputReference <a name="Cloud9EnvironmentEc2TagsOutputReference" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktn/provider-awscc'

new cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Cloud9EnvironmentEc2Tags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>

---



