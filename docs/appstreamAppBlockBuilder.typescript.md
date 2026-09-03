# `appstreamAppBlockBuilder` Submodule <a name="`appstreamAppBlockBuilder` Submodule" id="@cdktn/provider-awscc.appstreamAppBlockBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamAppBlockBuilder <a name="AppstreamAppBlockBuilder" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder awscc_appstream_app_block_builder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

new appstreamAppBlockBuilder.AppstreamAppBlockBuilder(scope: Construct, id: string, config: AppstreamAppBlockBuilderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig">AppstreamAppBlockBuilderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig">AppstreamAppBlockBuilderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints">putAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAccessEndpoints">resetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAppBlockArns">resetAppBlockArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetEnableDefaultInternetAccess">resetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessEndpoints` <a name="putAccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints"></a>

```typescript
public putAccessEndpoints(value: IResolvable | AppstreamAppBlockBuilderAccessEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags"></a>

```typescript
public putTags(value: IResolvable | AppstreamAppBlockBuilderTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig"></a>

```typescript
public putVpcConfig(value: AppstreamAppBlockBuilderVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

---

##### `resetAccessEndpoints` <a name="resetAccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAccessEndpoints"></a>

```typescript
public resetAccessEndpoints(): void
```

##### `resetAppBlockArns` <a name="resetAppBlockArns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAppBlockArns"></a>

```typescript
public resetAppBlockArns(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableDefaultInternetAccess` <a name="resetEnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetEnableDefaultInternetAccess"></a>

```typescript
public resetEnableDefaultInternetAccess(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamAppBlockBuilder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamAppBlockBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamAppBlockBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpoints">accessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList">AppstreamAppBlockBuilderAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList">AppstreamAppBlockBuilderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference">AppstreamAppBlockBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpointsInput">accessEndpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArnsInput">appBlockArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccessInput">enableDefaultInternetAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArns">appBlockArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platform">platform</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessEndpoints`<sup>Required</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: AppstreamAppBlockBuilderAccessEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList">AppstreamAppBlockBuilderAccessEndpointsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tags"></a>

```typescript
public readonly tags: AppstreamAppBlockBuilderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList">AppstreamAppBlockBuilderTagsList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: AppstreamAppBlockBuilderVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference">AppstreamAppBlockBuilderVpcConfigOutputReference</a>

---

##### `accessEndpointsInput`<sup>Optional</sup> <a name="accessEndpointsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpointsInput"></a>

```typescript
public readonly accessEndpointsInput: IResolvable | AppstreamAppBlockBuilderAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]

---

##### `appBlockArnsInput`<sup>Optional</sup> <a name="appBlockArnsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArnsInput"></a>

```typescript
public readonly appBlockArnsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableDefaultInternetAccessInput`<sup>Optional</sup> <a name="enableDefaultInternetAccessInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccessInput"></a>

```typescript
public readonly enableDefaultInternetAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppstreamAppBlockBuilderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | AppstreamAppBlockBuilderVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

---

##### `appBlockArns`<sup>Required</sup> <a name="appBlockArns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArns"></a>

```typescript
public readonly appBlockArns: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccess"></a>

```typescript
public readonly enableDefaultInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockBuilderAccessEndpoints <a name="AppstreamAppBlockBuilderAccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

const appstreamAppBlockBuilderAccessEndpoints: appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#endpoint_type AppstreamAppBlockBuilder#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.vpceId">vpceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#vpce_id AppstreamAppBlockBuilder#vpce_id}. |

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#endpoint_type AppstreamAppBlockBuilder#endpoint_type}.

---

##### `vpceId`<sup>Optional</sup> <a name="vpceId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.vpceId"></a>

```typescript
public readonly vpceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#vpce_id AppstreamAppBlockBuilder#vpce_id}.

---

### AppstreamAppBlockBuilderConfig <a name="AppstreamAppBlockBuilderConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

const appstreamAppBlockBuilderConfig: appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.accessEndpoints">accessEndpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.appBlockArns">appBlockArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}.

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: AppstreamAppBlockBuilderVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}.

---

##### `accessEndpoints`<sup>Optional</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: IResolvable | AppstreamAppBlockBuilderAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}.

---

##### `appBlockArns`<sup>Optional</sup> <a name="appBlockArns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.appBlockArns"></a>

```typescript
public readonly appBlockArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}.

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.enableDefaultInternetAccess"></a>

```typescript
public readonly enableDefaultInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppstreamAppBlockBuilderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}.

---

### AppstreamAppBlockBuilderTags <a name="AppstreamAppBlockBuilderTags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

const appstreamAppBlockBuilderTags: appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#key AppstreamAppBlockBuilder#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#value AppstreamAppBlockBuilder#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#key AppstreamAppBlockBuilder#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#value AppstreamAppBlockBuilder#value}.

---

### AppstreamAppBlockBuilderVpcConfig <a name="AppstreamAppBlockBuilderVpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

const appstreamAppBlockBuilderVpcConfig: appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#security_group_ids AppstreamAppBlockBuilder#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#subnet_ids AppstreamAppBlockBuilder#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#security_group_ids AppstreamAppBlockBuilder#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block_builder#subnet_ids AppstreamAppBlockBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamAppBlockBuilderAccessEndpointsList <a name="AppstreamAppBlockBuilderAccessEndpointsList" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

new appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get"></a>

```typescript
public get(index: number): AppstreamAppBlockBuilderAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockBuilderAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]

---


### AppstreamAppBlockBuilderAccessEndpointsOutputReference <a name="AppstreamAppBlockBuilderAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

new appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetVpceId">resetVpceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetEndpointType"></a>

```typescript
public resetEndpointType(): void
```

##### `resetVpceId` <a name="resetVpceId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetVpceId"></a>

```typescript
public resetVpceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceIdInput">vpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceId">vpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `vpceIdInput`<sup>Optional</sup> <a name="vpceIdInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceIdInput"></a>

```typescript
public readonly vpceIdInput: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `vpceId`<sup>Required</sup> <a name="vpceId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceId"></a>

```typescript
public readonly vpceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockBuilderAccessEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>

---


### AppstreamAppBlockBuilderTagsList <a name="AppstreamAppBlockBuilderTagsList" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

new appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get"></a>

```typescript
public get(index: number): AppstreamAppBlockBuilderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockBuilderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]

---


### AppstreamAppBlockBuilderTagsOutputReference <a name="AppstreamAppBlockBuilderTagsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

new appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockBuilderTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>

---


### AppstreamAppBlockBuilderVpcConfigOutputReference <a name="AppstreamAppBlockBuilderVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlockBuilder } from '@cdktn/provider-awscc'

new appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockBuilderVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

---



