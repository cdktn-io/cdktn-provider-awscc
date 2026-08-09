# `iotAuthorizer` Submodule <a name="`iotAuthorizer` Submodule" id="@cdktn/provider-awscc.iotAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotAuthorizer <a name="IotAuthorizer" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer awscc_iot_authorizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.Initializer"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

new iotAuthorizer.IotAuthorizer(scope: Construct, id: string, config: IotAuthorizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig">IotAuthorizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig">IotAuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetAuthorizerName">resetAuthorizerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetEnableCachingForHttp">resetEnableCachingForHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetSigningDisabled">resetSigningDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetTokenKeyName">resetTokenKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetTokenSigningPublicKeys">resetTokenSigningPublicKeys</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.putTags"></a>

```typescript
public putTags(value: IResolvable | IotAuthorizerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a>[]

---

##### `resetAuthorizerName` <a name="resetAuthorizerName" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetAuthorizerName"></a>

```typescript
public resetAuthorizerName(): void
```

##### `resetEnableCachingForHttp` <a name="resetEnableCachingForHttp" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetEnableCachingForHttp"></a>

```typescript
public resetEnableCachingForHttp(): void
```

##### `resetSigningDisabled` <a name="resetSigningDisabled" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetSigningDisabled"></a>

```typescript
public resetSigningDisabled(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTokenKeyName` <a name="resetTokenKeyName" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetTokenKeyName"></a>

```typescript
public resetTokenKeyName(): void
```

##### `resetTokenSigningPublicKeys` <a name="resetTokenSigningPublicKeys" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.resetTokenSigningPublicKeys"></a>

```typescript
public resetTokenSigningPublicKeys(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotAuthorizer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isConstruct"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

iotAuthorizer.IotAuthorizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isTerraformElement"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

iotAuthorizer.IotAuthorizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isTerraformResource"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

iotAuthorizer.IotAuthorizer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.generateConfigForImport"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

iotAuthorizer.IotAuthorizer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotAuthorizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotAuthorizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotAuthorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotAuthorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList">IotAuthorizerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArnInput">authorizerFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.authorizerNameInput">authorizerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.enableCachingForHttpInput">enableCachingForHttpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.signingDisabledInput">signingDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tokenKeyNameInput">tokenKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeysInput">tokenSigningPublicKeysInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArn">authorizerFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.authorizerName">authorizerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.enableCachingForHttp">enableCachingForHttp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.signingDisabled">signingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tokenKeyName">tokenKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeys">tokenSigningPublicKeys</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tags"></a>

```typescript
public readonly tags: IotAuthorizerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList">IotAuthorizerTagsList</a>

---

##### `authorizerFunctionArnInput`<sup>Optional</sup> <a name="authorizerFunctionArnInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArnInput"></a>

```typescript
public readonly authorizerFunctionArnInput: string;
```

- *Type:* string

---

##### `authorizerNameInput`<sup>Optional</sup> <a name="authorizerNameInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.authorizerNameInput"></a>

```typescript
public readonly authorizerNameInput: string;
```

- *Type:* string

---

##### `enableCachingForHttpInput`<sup>Optional</sup> <a name="enableCachingForHttpInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.enableCachingForHttpInput"></a>

```typescript
public readonly enableCachingForHttpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `signingDisabledInput`<sup>Optional</sup> <a name="signingDisabledInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.signingDisabledInput"></a>

```typescript
public readonly signingDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotAuthorizerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a>[]

---

##### `tokenKeyNameInput`<sup>Optional</sup> <a name="tokenKeyNameInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tokenKeyNameInput"></a>

```typescript
public readonly tokenKeyNameInput: string;
```

- *Type:* string

---

##### `tokenSigningPublicKeysInput`<sup>Optional</sup> <a name="tokenSigningPublicKeysInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeysInput"></a>

```typescript
public readonly tokenSigningPublicKeysInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="authorizerFunctionArn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArn"></a>

```typescript
public readonly authorizerFunctionArn: string;
```

- *Type:* string

---

##### `authorizerName`<sup>Required</sup> <a name="authorizerName" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.authorizerName"></a>

```typescript
public readonly authorizerName: string;
```

- *Type:* string

---

##### `enableCachingForHttp`<sup>Required</sup> <a name="enableCachingForHttp" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.enableCachingForHttp"></a>

```typescript
public readonly enableCachingForHttp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `signingDisabled`<sup>Required</sup> <a name="signingDisabled" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.signingDisabled"></a>

```typescript
public readonly signingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokenKeyName`<sup>Required</sup> <a name="tokenKeyName" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tokenKeyName"></a>

```typescript
public readonly tokenKeyName: string;
```

- *Type:* string

---

##### `tokenSigningPublicKeys`<sup>Required</sup> <a name="tokenSigningPublicKeys" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeys"></a>

```typescript
public readonly tokenSigningPublicKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotAuthorizerConfig <a name="IotAuthorizerConfig" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.Initializer"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

const iotAuthorizerConfig: iotAuthorizer.IotAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.authorizerFunctionArn">authorizerFunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.authorizerName">authorizerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#authorizer_name IotAuthorizer#authorizer_name}. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.enableCachingForHttp">enableCachingForHttp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.signingDisabled">signingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#status IotAuthorizer#status}. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.tokenKeyName">tokenKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.tokenSigningPublicKeys">tokenSigningPublicKeys</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="authorizerFunctionArn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.authorizerFunctionArn"></a>

```typescript
public readonly authorizerFunctionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}.

---

##### `authorizerName`<sup>Optional</sup> <a name="authorizerName" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.authorizerName"></a>

```typescript
public readonly authorizerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#authorizer_name IotAuthorizer#authorizer_name}.

---

##### `enableCachingForHttp`<sup>Optional</sup> <a name="enableCachingForHttp" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.enableCachingForHttp"></a>

```typescript
public readonly enableCachingForHttp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}.

---

##### `signingDisabled`<sup>Optional</sup> <a name="signingDisabled" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.signingDisabled"></a>

```typescript
public readonly signingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#status IotAuthorizer#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotAuthorizerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}.

---

##### `tokenKeyName`<sup>Optional</sup> <a name="tokenKeyName" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.tokenKeyName"></a>

```typescript
public readonly tokenKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}.

---

##### `tokenSigningPublicKeys`<sup>Optional</sup> <a name="tokenSigningPublicKeys" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerConfig.property.tokenSigningPublicKeys"></a>

```typescript
public readonly tokenSigningPublicKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}.

---

### IotAuthorizerTags <a name="IotAuthorizerTags" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags.Initializer"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

const iotAuthorizerTags: iotAuthorizer.IotAuthorizerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#key IotAuthorizer#key}. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#value IotAuthorizer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#key IotAuthorizer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_authorizer#value IotAuthorizer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotAuthorizerTagsList <a name="IotAuthorizerTagsList" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.Initializer"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

new iotAuthorizer.IotAuthorizerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.get"></a>

```typescript
public get(index: number): IotAuthorizerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotAuthorizerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a>[]

---


### IotAuthorizerTagsOutputReference <a name="IotAuthorizerTagsOutputReference" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer"></a>

```typescript
import { iotAuthorizer } from '@cdktn/provider-awscc'

new iotAuthorizer.IotAuthorizerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotAuthorizerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAuthorizer.IotAuthorizerTags">IotAuthorizerTags</a>

---



