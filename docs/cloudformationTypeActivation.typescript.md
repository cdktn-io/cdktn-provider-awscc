# `cloudformationTypeActivation` Submodule <a name="`cloudformationTypeActivation` Submodule" id="@cdktn/provider-awscc.cloudformationTypeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationTypeActivation <a name="CloudformationTypeActivation" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation awscc_cloudformation_type_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer"></a>

```typescript
import { cloudformationTypeActivation } from '@cdktn/provider-awscc'

new cloudformationTypeActivation.CloudformationTypeActivation(scope: Construct, id: string, config?: CloudformationTypeActivationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig">CloudformationTypeActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig">CloudformationTypeActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate">resetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion">resetMajorVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn">resetPublicTypeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId">resetPublisherId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias">resetTypeNameAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump">resetVersionBump</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: CloudformationTypeActivationLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---

##### `resetAutoUpdate` <a name="resetAutoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate"></a>

```typescript
public resetAutoUpdate(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetMajorVersion` <a name="resetMajorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion"></a>

```typescript
public resetMajorVersion(): void
```

##### `resetPublicTypeArn` <a name="resetPublicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn"></a>

```typescript
public resetPublicTypeArn(): void
```

##### `resetPublisherId` <a name="resetPublisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId"></a>

```typescript
public resetPublisherId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType"></a>

```typescript
public resetType(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

##### `resetTypeNameAlias` <a name="resetTypeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias"></a>

```typescript
public resetTypeNameAlias(): void
```

##### `resetVersionBump` <a name="resetVersionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump"></a>

```typescript
public resetVersionBump(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct"></a>

```typescript
import { cloudformationTypeActivation } from '@cdktn/provider-awscc'

cloudformationTypeActivation.CloudformationTypeActivation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement"></a>

```typescript
import { cloudformationTypeActivation } from '@cdktn/provider-awscc'

cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource"></a>

```typescript
import { cloudformationTypeActivation } from '@cdktn/provider-awscc'

cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport"></a>

```typescript
import { cloudformationTypeActivation } from '@cdktn/provider-awscc'

cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationTypeActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationTypeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationTypeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput">autoUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput">loggingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput">majorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput">publicTypeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput">publisherIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput">typeNameAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput">versionBumpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion">majorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn">publicTypeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId">publisherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias">typeNameAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump">versionBump</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: CloudformationTypeActivationLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a>

---

##### `autoUpdateInput`<sup>Optional</sup> <a name="autoUpdateInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput"></a>

```typescript
public readonly autoUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: IResolvable | CloudformationTypeActivationLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---

##### `majorVersionInput`<sup>Optional</sup> <a name="majorVersionInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput"></a>

```typescript
public readonly majorVersionInput: string;
```

- *Type:* string

---

##### `publicTypeArnInput`<sup>Optional</sup> <a name="publicTypeArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput"></a>

```typescript
public readonly publicTypeArnInput: string;
```

- *Type:* string

---

##### `publisherIdInput`<sup>Optional</sup> <a name="publisherIdInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput"></a>

```typescript
public readonly publisherIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeNameAliasInput`<sup>Optional</sup> <a name="typeNameAliasInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput"></a>

```typescript
public readonly typeNameAliasInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `versionBumpInput`<sup>Optional</sup> <a name="versionBumpInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput"></a>

```typescript
public readonly versionBumpInput: string;
```

- *Type:* string

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

---

##### `publicTypeArn`<sup>Required</sup> <a name="publicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn"></a>

```typescript
public readonly publicTypeArn: string;
```

- *Type:* string

---

##### `publisherId`<sup>Required</sup> <a name="publisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId"></a>

```typescript
public readonly publisherId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typeNameAlias`<sup>Required</sup> <a name="typeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias"></a>

```typescript
public readonly typeNameAlias: string;
```

- *Type:* string

---

##### `versionBump`<sup>Required</sup> <a name="versionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump"></a>

```typescript
public readonly versionBump: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationTypeActivationConfig <a name="CloudformationTypeActivationConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.Initializer"></a>

```typescript
import { cloudformationTypeActivation } from '@cdktn/provider-awscc'

const cloudformationTypeActivationConfig: cloudformationTypeActivation.CloudformationTypeActivationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | Specifies logging configuration information for a type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion">majorVersion</a></code> | <code>string</code> | The Major Version of the type you want to enable. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn">publicTypeArn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) assigned to the public extension upon publication. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId">publisherId</a></code> | <code>string</code> | The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type">type</a></code> | <code>string</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName">typeName</a></code> | <code>string</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias">typeNameAlias</a></code> | <code>string</code> | An alias to assign to the public extension in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump">versionBump</a></code> | <code>string</code> | Manually updates a previously-enabled type to a new major or minor version, if available. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoUpdate`<sup>Optional</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher.

Major versions released by the publisher must be manually updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#auto_update CloudformationTypeActivation#auto_update}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#execution_role_arn CloudformationTypeActivation#execution_role_arn}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: CloudformationTypeActivationLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#logging_config CloudformationTypeActivation#logging_config}

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

The Major Version of the type you want to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#major_version CloudformationTypeActivation#major_version}

---

##### `publicTypeArn`<sup>Optional</sup> <a name="publicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn"></a>

```typescript
public readonly publicTypeArn: string;
```

- *Type:* string

The Amazon Resource Number (ARN) assigned to the public extension upon publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#public_type_arn CloudformationTypeActivation#public_type_arn}

---

##### `publisherId`<sup>Optional</sup> <a name="publisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId"></a>

```typescript
public readonly publisherId: string;
```

- *Type:* string

The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#publisher_id CloudformationTypeActivation#publisher_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#type CloudformationTypeActivation#type}

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#type_name CloudformationTypeActivation#type_name}

---

##### `typeNameAlias`<sup>Optional</sup> <a name="typeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias"></a>

```typescript
public readonly typeNameAlias: string;
```

- *Type:* string

An alias to assign to the public extension in this account and region.

If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#type_name_alias CloudformationTypeActivation#type_name_alias}

---

##### `versionBump`<sup>Optional</sup> <a name="versionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump"></a>

```typescript
public readonly versionBump: string;
```

- *Type:* string

Manually updates a previously-enabled type to a new major or minor version, if available.

You can also use this parameter to update the value of AutoUpdateEnabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#version_bump CloudformationTypeActivation#version_bump}

---

### CloudformationTypeActivationLoggingConfig <a name="CloudformationTypeActivationLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.Initializer"></a>

```typescript
import { cloudformationTypeActivation } from '@cdktn/provider-awscc'

const cloudformationTypeActivationLoggingConfig: cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn">logRoleArn</a></code> | <code>string</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs. |

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#log_group_name CloudformationTypeActivation#log_group_name}

---

##### `logRoleArn`<sup>Optional</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn"></a>

```typescript
public readonly logRoleArn: string;
```

- *Type:* string

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_type_activation#log_role_arn CloudformationTypeActivation#log_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationTypeActivationLoggingConfigOutputReference <a name="CloudformationTypeActivationLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer"></a>

```typescript
import { cloudformationTypeActivation } from '@cdktn/provider-awscc'

new cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn">resetLogRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```

##### `resetLogRoleArn` <a name="resetLogRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn"></a>

```typescript
public resetLogRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput">logRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn">logRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `logRoleArnInput`<sup>Optional</sup> <a name="logRoleArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput"></a>

```typescript
public readonly logRoleArnInput: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logRoleArn`<sup>Required</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn"></a>

```typescript
public readonly logRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationTypeActivationLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---



