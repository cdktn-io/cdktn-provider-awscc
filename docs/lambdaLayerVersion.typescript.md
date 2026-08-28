# `lambdaLayerVersion` Submodule <a name="`lambdaLayerVersion` Submodule" id="@cdktn/provider-awscc.lambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersion <a name="LambdaLayerVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version awscc_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer"></a>

```typescript
import { lambdaLayerVersion } from '@cdktn/provider-awscc'

new lambdaLayerVersion.LambdaLayerVersion(scope: Construct, id: string, config: LambdaLayerVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig">LambdaLayerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig">LambdaLayerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures">resetCompatibleArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes">resetCompatibleRuntimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLayerName">resetLayerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo">resetLicenseInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent"></a>

```typescript
public putContent(value: LambdaLayerVersionContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

---

##### `resetCompatibleArchitectures` <a name="resetCompatibleArchitectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures"></a>

```typescript
public resetCompatibleArchitectures(): void
```

##### `resetCompatibleRuntimes` <a name="resetCompatibleRuntimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes"></a>

```typescript
public resetCompatibleRuntimes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLayerName` <a name="resetLayerName" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLayerName"></a>

```typescript
public resetLayerName(): void
```

##### `resetLicenseInfo` <a name="resetLicenseInfo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo"></a>

```typescript
public resetLicenseInfo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaLayerVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct"></a>

```typescript
import { lambdaLayerVersion } from '@cdktn/provider-awscc'

lambdaLayerVersion.LambdaLayerVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement"></a>

```typescript
import { lambdaLayerVersion } from '@cdktn/provider-awscc'

lambdaLayerVersion.LambdaLayerVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource"></a>

```typescript
import { lambdaLayerVersion } from '@cdktn/provider-awscc'

lambdaLayerVersion.LambdaLayerVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport"></a>

```typescript
import { lambdaLayerVersion } from '@cdktn/provider-awscc'

lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaLayerVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaLayerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaLayerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaLayerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference">LambdaLayerVersionContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerVersionArn">layerVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput">compatibleArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput">compatibleRuntimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput">layerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput">licenseInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerName">layerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo">licenseInfo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.content"></a>

```typescript
public readonly content: LambdaLayerVersionContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference">LambdaLayerVersionContentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerVersionArn"></a>

```typescript
public readonly layerVersionArn: string;
```

- *Type:* string

---

##### `compatibleArchitecturesInput`<sup>Optional</sup> <a name="compatibleArchitecturesInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput"></a>

```typescript
public readonly compatibleArchitecturesInput: string[];
```

- *Type:* string[]

---

##### `compatibleRuntimesInput`<sup>Optional</sup> <a name="compatibleRuntimesInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput"></a>

```typescript
public readonly compatibleRuntimesInput: string[];
```

- *Type:* string[]

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | LambdaLayerVersionContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `layerNameInput`<sup>Optional</sup> <a name="layerNameInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput"></a>

```typescript
public readonly layerNameInput: string;
```

- *Type:* string

---

##### `licenseInfoInput`<sup>Optional</sup> <a name="licenseInfoInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput"></a>

```typescript
public readonly licenseInfoInput: string;
```

- *Type:* string

---

##### `compatibleArchitectures`<sup>Required</sup> <a name="compatibleArchitectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures"></a>

```typescript
public readonly compatibleArchitectures: string[];
```

- *Type:* string[]

---

##### `compatibleRuntimes`<sup>Required</sup> <a name="compatibleRuntimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo"></a>

```typescript
public readonly licenseInfo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionConfig <a name="LambdaLayerVersionConfig" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.Initializer"></a>

```typescript
import { lambdaLayerVersion } from '@cdktn/provider-awscc'

const lambdaLayerVersionConfig: lambdaLayerVersion.LambdaLayerVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | The function layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>string[]</code> | A list of compatible instruction set architectures. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>string[]</code> | A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.description">description</a></code> | <code>string</code> | The description of the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName">layerName</a></code> | <code>string</code> | The name or Amazon Resource Name (ARN) of the layer. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo">licenseInfo</a></code> | <code>string</code> | The layer's software license. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.content"></a>

```typescript
public readonly content: LambdaLayerVersionContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

The function layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#content LambdaLayerVersion#content}

---

##### `compatibleArchitectures`<sup>Optional</sup> <a name="compatibleArchitectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures"></a>

```typescript
public readonly compatibleArchitectures: string[];
```

- *Type:* string[]

A list of compatible instruction set architectures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: string[];
```

- *Type:* string[]

A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#description LambdaLayerVersion#description}

---

##### `layerName`<sup>Optional</sup> <a name="layerName" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

The name or Amazon Resource Name (ARN) of the layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo"></a>

```typescript
public readonly licenseInfo: string;
```

- *Type:* string

The layer's software license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#license_info LambdaLayerVersion#license_info}

---

### LambdaLayerVersionContent <a name="LambdaLayerVersionContent" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.Initializer"></a>

```typescript
import { lambdaLayerVersion } from '@cdktn/provider-awscc'

const lambdaLayerVersionContent: lambdaLayerVersion.LambdaLayerVersionContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The Amazon S3 bucket of the layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Key">s3Key</a></code> | <code>string</code> | The Amazon S3 key of the layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectStorageMode">s3ObjectStorageMode</a></code> | <code>string</code> | Specifies whether Lambda should copy the deployment package to its internal storage (COPY) or reference it directly from your S3 bucket (REFERENCE). |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | For versioned objects, the version of the layer archive object to use. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The Amazon S3 bucket of the layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

The Amazon S3 key of the layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}

---

##### `s3ObjectStorageMode`<sup>Optional</sup> <a name="s3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectStorageMode"></a>

```typescript
public readonly s3ObjectStorageMode: string;
```

- *Type:* string

Specifies whether Lambda should copy the deployment package to its internal storage (COPY) or reference it directly from your S3 bucket (REFERENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_object_storage_mode LambdaLayerVersion#s3_object_storage_mode}

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

For versioned objects, the version of the layer archive object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaLayerVersionContentOutputReference <a name="LambdaLayerVersionContentOutputReference" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer"></a>

```typescript
import { lambdaLayerVersion } from '@cdktn/provider-awscc'

new lambdaLayerVersion.LambdaLayerVersionContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectStorageMode">resetS3ObjectStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3ObjectStorageMode` <a name="resetS3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectStorageMode"></a>

```typescript
public resetS3ObjectStorageMode(): void
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectVersion"></a>

```typescript
public resetS3ObjectVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageModeInput">s3ObjectStorageModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageMode">s3ObjectStorageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3ObjectStorageModeInput`<sup>Optional</sup> <a name="s3ObjectStorageModeInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageModeInput"></a>

```typescript
public readonly s3ObjectStorageModeInput: string;
```

- *Type:* string

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersionInput"></a>

```typescript
public readonly s3ObjectVersionInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3ObjectStorageMode`<sup>Required</sup> <a name="s3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageMode"></a>

```typescript
public readonly s3ObjectStorageMode: string;
```

- *Type:* string

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaLayerVersionContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

---



