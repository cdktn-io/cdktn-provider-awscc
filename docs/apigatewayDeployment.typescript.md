# `apigatewayDeployment` Submodule <a name="`apigatewayDeployment` Submodule" id="@cdktn/provider-awscc.apigatewayDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDeployment <a name="ApigatewayDeployment" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment awscc_apigateway_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeployment(scope: Construct, id: string, config: ApigatewayDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig">ApigatewayDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig">ApigatewayDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings">putDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription">putStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDeploymentCanarySettings">resetDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageDescription">resetStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageName">resetStageName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentCanarySettings` <a name="putDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings"></a>

```typescript
public putDeploymentCanarySettings(value: ApigatewayDeploymentDeploymentCanarySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---

##### `putStageDescription` <a name="putStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription"></a>

```typescript
public putStageDescription(value: ApigatewayDeploymentStageDescription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---

##### `resetDeploymentCanarySettings` <a name="resetDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDeploymentCanarySettings"></a>

```typescript
public resetDeploymentCanarySettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetStageDescription` <a name="resetStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageDescription"></a>

```typescript
public resetStageDescription(): void
```

##### `resetStageName` <a name="resetStageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageName"></a>

```typescript
public resetStageName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

apigatewayDeployment.ApigatewayDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

apigatewayDeployment.ApigatewayDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

apigatewayDeployment.ApigatewayDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

apigatewayDeployment.ApigatewayDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigatewayDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettings">deploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference">ApigatewayDeploymentDeploymentCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescription">stageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference">ApigatewayDeploymentStageDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettingsInput">deploymentCanarySettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescriptionInput">stageDescriptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageNameInput">stageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deploymentCanarySettings`<sup>Required</sup> <a name="deploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettings"></a>

```typescript
public readonly deploymentCanarySettings: ApigatewayDeploymentDeploymentCanarySettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference">ApigatewayDeploymentDeploymentCanarySettingsOutputReference</a>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stageDescription`<sup>Required</sup> <a name="stageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescription"></a>

```typescript
public readonly stageDescription: ApigatewayDeploymentStageDescriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference">ApigatewayDeploymentStageDescriptionOutputReference</a>

---

##### `deploymentCanarySettingsInput`<sup>Optional</sup> <a name="deploymentCanarySettingsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettingsInput"></a>

```typescript
public readonly deploymentCanarySettingsInput: IResolvable | ApigatewayDeploymentDeploymentCanarySettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `stageDescriptionInput`<sup>Optional</sup> <a name="stageDescriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescriptionInput"></a>

```typescript
public readonly stageDescriptionInput: IResolvable | ApigatewayDeploymentStageDescription;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageNameInput"></a>

```typescript
public readonly stageNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDeploymentConfig <a name="ApigatewayDeploymentConfig" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

const apigatewayDeploymentConfig: apigatewayDeployment.ApigatewayDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.deploymentCanarySettings">deploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageDescription">stageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | The description of the Stage resource for the Deployment resource to create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageName">stageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}.

---

##### `deploymentCanarySettings`<sup>Optional</sup> <a name="deploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.deploymentCanarySettings"></a>

```typescript
public readonly deploymentCanarySettings: ApigatewayDeploymentDeploymentCanarySettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#deployment_canary_settings ApigatewayDeployment#deployment_canary_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}.

---

##### `stageDescription`<sup>Optional</sup> <a name="stageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageDescription"></a>

```typescript
public readonly stageDescription: ApigatewayDeploymentStageDescription;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

The description of the Stage resource for the Deployment resource to create.

To specify a stage description, you must also provide a stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_description ApigatewayDeployment#stage_description}

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}.

---

### ApigatewayDeploymentDeploymentCanarySettings <a name="ApigatewayDeploymentDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

const apigatewayDeploymentDeploymentCanarySettings: apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.useStageCache">useStageCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}. |

---

##### `percentTraffic`<sup>Optional</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

##### `useStageCache`<sup>Optional</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.useStageCache"></a>

```typescript
public readonly useStageCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

### ApigatewayDeploymentStageDescription <a name="ApigatewayDeploymentStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

const apigatewayDeploymentStageDescription: apigatewayDeployment.ApigatewayDeploymentStageDescription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.accessLogSetting">accessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | Specifies settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the cached responses are encrypted. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cachingEnabled">cachingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether responses are cached and returned for requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.canarySetting">canarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | Specifies settings for the canary deployment in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether data trace logging is enabled for methods in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.description">description</a></code> | <code>string</code> | A description of the purpose of the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | The version identifier of the API documentation snapshot. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | The logging level for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.methodSettings">methodSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]</code> | Configures settings for all of the stage's methods. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]</code> | An array of arbitrary tags (key-value pairs) to associate with the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | The target request burst rate limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | The target request steady-state rate limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tracingEnabled">tracingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether active tracing with X-ray is enabled for this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | A map that defines the stage variables. |

---

##### `accessLogSetting`<sup>Optional</sup> <a name="accessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.accessLogSetting"></a>

```typescript
public readonly accessLogSetting: ApigatewayDeploymentStageDescriptionAccessLogSetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

Specifies settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#access_log_setting ApigatewayDeployment#access_log_setting}

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="cacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}.

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="cacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_cluster_size ApigatewayDeployment#cache_cluster_size}

---

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the cached responses are encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}

---

##### `cachingEnabled`<sup>Optional</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether responses are cached and returned for requests.

You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}

---

##### `canarySetting`<sup>Optional</sup> <a name="canarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.canarySetting"></a>

```typescript
public readonly canarySetting: ApigatewayDeploymentStageDescriptionCanarySetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

Specifies settings for the canary deployment in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#canary_setting ApigatewayDeployment#canary_setting}

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#client_certificate_id ApigatewayDeployment#client_certificate_id}

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether data trace logging is enabled for methods in the stage.

API Gateway pushes these logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the purpose of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}

---

##### `documentationVersion`<sup>Optional</sup> <a name="documentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

The version identifier of the API documentation snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#documentation_version ApigatewayDeployment#documentation_version}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

The logging level for this method.

For valid values, see the ``loggingLevel`` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}

---

##### `methodSettings`<sup>Optional</sup> <a name="methodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.methodSettings"></a>

```typescript
public readonly methodSettings: IResolvable | ApigatewayDeploymentStageDescriptionMethodSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]

Configures settings for all of the stage's methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#method_settings ApigatewayDeployment#method_settings}

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApigatewayDeploymentStageDescriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]

An array of arbitrary tags (key-value pairs) to associate with the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#tags ApigatewayDeployment#tags}

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

The target request burst rate limit.

This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

The target request steady-state rate limit.

For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}

---

##### `tracingEnabled`<sup>Optional</sup> <a name="tracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tracingEnabled"></a>

```typescript
public readonly tracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether active tracing with X-ray is enabled for this stage.

For more information, see [Trace API Gateway API Execution with X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#tracing_enabled ApigatewayDeployment#tracing_enabled}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map that defines the stage variables.

Variable names must consist of alphanumeric characters, and the values must match the following regular expression: ``[A-Za-z0-9-._~:/?#&=,]+``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#variables ApigatewayDeployment#variables}

---

### ApigatewayDeploymentStageDescriptionAccessLogSetting <a name="ApigatewayDeploymentStageDescriptionAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

const apigatewayDeploymentStageDescriptionAccessLogSetting: apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}. |

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}.

---

### ApigatewayDeploymentStageDescriptionCanarySetting <a name="ApigatewayDeploymentStageDescriptionCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

const apigatewayDeploymentStageDescriptionCanarySetting: apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.useStageCache">useStageCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}. |

---

##### `percentTraffic`<sup>Optional</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

##### `useStageCache`<sup>Optional</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.useStageCache"></a>

```typescript
public readonly useStageCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

### ApigatewayDeploymentStageDescriptionMethodSettings <a name="ApigatewayDeploymentStageDescriptionMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

const apigatewayDeploymentStageDescriptionMethodSettings: apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cachingEnabled">cachingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.httpMethod">httpMethod</a></code> | <code>string</code> | The HTTP method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.resourcePath">resourcePath</a></code> | <code>string</code> | The resource path for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}. |

---

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}.

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}.

---

##### `cachingEnabled`<sup>Optional</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}.

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}.

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

The HTTP method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#http_method ApigatewayDeployment#http_method}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}.

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The resource path for this method.

Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#resource_path ApigatewayDeployment#resource_path}

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}.

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}.

---

### ApigatewayDeploymentStageDescriptionTags <a name="ApigatewayDeploymentStageDescriptionTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

const apigatewayDeploymentStageDescriptionTags: apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.key">key</a></code> | <code>string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#value ApigatewayDeployment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDeploymentDeploymentCanarySettingsOutputReference <a name="ApigatewayDeploymentDeploymentCanarySettingsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetPercentTraffic">resetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetStageVariableOverrides">resetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetUseStageCache">resetUseStageCache</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentTraffic` <a name="resetPercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetPercentTraffic"></a>

```typescript
public resetPercentTraffic(): void
```

##### `resetStageVariableOverrides` <a name="resetStageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```typescript
public resetStageVariableOverrides(): void
```

##### `resetUseStageCache` <a name="resetUseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetUseStageCache"></a>

```typescript
public resetUseStageCache(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTrafficInput">percentTrafficInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput">stageVariableOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCacheInput">useStageCacheInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache">useStageCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentTrafficInput`<sup>Optional</sup> <a name="percentTrafficInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTrafficInput"></a>

```typescript
public readonly percentTrafficInput: number;
```

- *Type:* number

---

##### `stageVariableOverridesInput`<sup>Optional</sup> <a name="stageVariableOverridesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```typescript
public readonly stageVariableOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useStageCacheInput`<sup>Optional</sup> <a name="useStageCacheInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCacheInput"></a>

```typescript
public readonly useStageCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache"></a>

```typescript
public readonly useStageCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDeploymentDeploymentCanarySettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---


### ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference <a name="ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetDestinationArn"></a>

```typescript
public resetDestinationArn(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDeploymentStageDescriptionAccessLogSetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---


### ApigatewayDeploymentStageDescriptionCanarySettingOutputReference <a name="ApigatewayDeploymentStageDescriptionCanarySettingOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetPercentTraffic">resetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetStageVariableOverrides">resetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetUseStageCache">resetUseStageCache</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentTraffic` <a name="resetPercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetPercentTraffic"></a>

```typescript
public resetPercentTraffic(): void
```

##### `resetStageVariableOverrides` <a name="resetStageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetStageVariableOverrides"></a>

```typescript
public resetStageVariableOverrides(): void
```

##### `resetUseStageCache` <a name="resetUseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetUseStageCache"></a>

```typescript
public resetUseStageCache(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTrafficInput">percentTrafficInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverridesInput">stageVariableOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCacheInput">useStageCacheInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache">useStageCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentTrafficInput`<sup>Optional</sup> <a name="percentTrafficInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTrafficInput"></a>

```typescript
public readonly percentTrafficInput: number;
```

- *Type:* number

---

##### `stageVariableOverridesInput`<sup>Optional</sup> <a name="stageVariableOverridesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverridesInput"></a>

```typescript
public readonly stageVariableOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useStageCacheInput`<sup>Optional</sup> <a name="useStageCacheInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCacheInput"></a>

```typescript
public readonly useStageCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache"></a>

```typescript
public readonly useStageCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDeploymentStageDescriptionCanarySetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---


### ApigatewayDeploymentStageDescriptionMethodSettingsList <a name="ApigatewayDeploymentStageDescriptionMethodSettingsList" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get"></a>

```typescript
public get(index: number): ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDeploymentStageDescriptionMethodSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]

---


### ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference <a name="ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheDataEncrypted">resetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheTtlInSeconds">resetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCachingEnabled">resetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheDataEncrypted` <a name="resetCacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheDataEncrypted"></a>

```typescript
public resetCacheDataEncrypted(): void
```

##### `resetCacheTtlInSeconds` <a name="resetCacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheTtlInSeconds"></a>

```typescript
public resetCacheTtlInSeconds(): void
```

##### `resetCachingEnabled` <a name="resetCachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCachingEnabled"></a>

```typescript
public resetCachingEnabled(): void
```

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetDataTraceEnabled"></a>

```typescript
public resetDataTraceEnabled(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetMetricsEnabled"></a>

```typescript
public resetMetricsEnabled(): void
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetResourcePath"></a>

```typescript
public resetResourcePath(): void
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingBurstLimit"></a>

```typescript
public resetThrottlingBurstLimit(): void
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingRateLimit"></a>

```typescript
public resetThrottlingRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncryptedInput">cacheDataEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSecondsInput">cacheTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabledInput">cachingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePathInput">resourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath">resourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheDataEncryptedInput`<sup>Optional</sup> <a name="cacheDataEncryptedInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```typescript
public readonly cacheDataEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheTtlInSecondsInput`<sup>Optional</sup> <a name="cacheTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```typescript
public readonly cacheTtlInSecondsInput: number;
```

- *Type:* number

---

##### `cachingEnabledInput`<sup>Optional</sup> <a name="cachingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabledInput"></a>

```typescript
public readonly cachingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabledInput"></a>

```typescript
public readonly dataTraceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabledInput"></a>

```typescript
public readonly metricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePathInput"></a>

```typescript
public readonly resourcePathInput: string;
```

- *Type:* string

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```typescript
public readonly throttlingBurstLimitInput: number;
```

- *Type:* number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimitInput"></a>

```typescript
public readonly throttlingRateLimitInput: number;
```

- *Type:* number

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDeploymentStageDescriptionMethodSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>

---


### ApigatewayDeploymentStageDescriptionOutputReference <a name="ApigatewayDeploymentStageDescriptionOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting">putAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting">putCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings">putMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetAccessLogSetting">resetAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterEnabled">resetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterSize">resetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheDataEncrypted">resetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheTtlInSeconds">resetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCachingEnabled">resetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCanarySetting">resetCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDocumentationVersion">resetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMethodSettings">resetMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTracingEnabled">resetTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessLogSetting` <a name="putAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting"></a>

```typescript
public putAccessLogSetting(value: ApigatewayDeploymentStageDescriptionAccessLogSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---

##### `putCanarySetting` <a name="putCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting"></a>

```typescript
public putCanarySetting(value: ApigatewayDeploymentStageDescriptionCanarySetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---

##### `putMethodSettings` <a name="putMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings"></a>

```typescript
public putMethodSettings(value: IResolvable | ApigatewayDeploymentStageDescriptionMethodSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | ApigatewayDeploymentStageDescriptionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]

---

##### `resetAccessLogSetting` <a name="resetAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetAccessLogSetting"></a>

```typescript
public resetAccessLogSetting(): void
```

##### `resetCacheClusterEnabled` <a name="resetCacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterEnabled"></a>

```typescript
public resetCacheClusterEnabled(): void
```

##### `resetCacheClusterSize` <a name="resetCacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterSize"></a>

```typescript
public resetCacheClusterSize(): void
```

##### `resetCacheDataEncrypted` <a name="resetCacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheDataEncrypted"></a>

```typescript
public resetCacheDataEncrypted(): void
```

##### `resetCacheTtlInSeconds` <a name="resetCacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheTtlInSeconds"></a>

```typescript
public resetCacheTtlInSeconds(): void
```

##### `resetCachingEnabled` <a name="resetCachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCachingEnabled"></a>

```typescript
public resetCachingEnabled(): void
```

##### `resetCanarySetting` <a name="resetCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCanarySetting"></a>

```typescript
public resetCanarySetting(): void
```

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetClientCertificateId"></a>

```typescript
public resetClientCertificateId(): void
```

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDataTraceEnabled"></a>

```typescript
public resetDataTraceEnabled(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentationVersion` <a name="resetDocumentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDocumentationVersion"></a>

```typescript
public resetDocumentationVersion(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetMethodSettings` <a name="resetMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMethodSettings"></a>

```typescript
public resetMethodSettings(): void
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMetricsEnabled"></a>

```typescript
public resetMetricsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingBurstLimit"></a>

```typescript
public resetThrottlingBurstLimit(): void
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingRateLimit"></a>

```typescript
public resetThrottlingRateLimit(): void
```

##### `resetTracingEnabled` <a name="resetTracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTracingEnabled"></a>

```typescript
public resetTracingEnabled(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetVariables"></a>

```typescript
public resetVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting">accessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting">canarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference">ApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings">methodSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList">ApigatewayDeploymentStageDescriptionMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList">ApigatewayDeploymentStageDescriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSettingInput">accessLogSettingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabledInput">cacheClusterEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSizeInput">cacheClusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncryptedInput">cacheDataEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSecondsInput">cacheTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabledInput">cachingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySettingInput">canarySettingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersionInput">documentationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettingsInput">methodSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabledInput">tracingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variablesInput">variablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled">tracingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLogSetting`<sup>Required</sup> <a name="accessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting"></a>

```typescript
public readonly accessLogSetting: ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a>

---

##### `canarySetting`<sup>Required</sup> <a name="canarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting"></a>

```typescript
public readonly canarySetting: ApigatewayDeploymentStageDescriptionCanarySettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference">ApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a>

---

##### `methodSettings`<sup>Required</sup> <a name="methodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings"></a>

```typescript
public readonly methodSettings: ApigatewayDeploymentStageDescriptionMethodSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList">ApigatewayDeploymentStageDescriptionMethodSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tags"></a>

```typescript
public readonly tags: ApigatewayDeploymentStageDescriptionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList">ApigatewayDeploymentStageDescriptionTagsList</a>

---

##### `accessLogSettingInput`<sup>Optional</sup> <a name="accessLogSettingInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSettingInput"></a>

```typescript
public readonly accessLogSettingInput: IResolvable | ApigatewayDeploymentStageDescriptionAccessLogSetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---

##### `cacheClusterEnabledInput`<sup>Optional</sup> <a name="cacheClusterEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabledInput"></a>

```typescript
public readonly cacheClusterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheClusterSizeInput`<sup>Optional</sup> <a name="cacheClusterSizeInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSizeInput"></a>

```typescript
public readonly cacheClusterSizeInput: string;
```

- *Type:* string

---

##### `cacheDataEncryptedInput`<sup>Optional</sup> <a name="cacheDataEncryptedInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncryptedInput"></a>

```typescript
public readonly cacheDataEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheTtlInSecondsInput`<sup>Optional</sup> <a name="cacheTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSecondsInput"></a>

```typescript
public readonly cacheTtlInSecondsInput: number;
```

- *Type:* number

---

##### `cachingEnabledInput`<sup>Optional</sup> <a name="cachingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabledInput"></a>

```typescript
public readonly cachingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `canarySettingInput`<sup>Optional</sup> <a name="canarySettingInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySettingInput"></a>

```typescript
public readonly canarySettingInput: IResolvable | ApigatewayDeploymentStageDescriptionCanarySetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateIdInput"></a>

```typescript
public readonly clientCertificateIdInput: string;
```

- *Type:* string

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabledInput"></a>

```typescript
public readonly dataTraceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `documentationVersionInput`<sup>Optional</sup> <a name="documentationVersionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersionInput"></a>

```typescript
public readonly documentationVersionInput: string;
```

- *Type:* string

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `methodSettingsInput`<sup>Optional</sup> <a name="methodSettingsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettingsInput"></a>

```typescript
public readonly methodSettingsInput: IResolvable | ApigatewayDeploymentStageDescriptionMethodSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabledInput"></a>

```typescript
public readonly metricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApigatewayDeploymentStageDescriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimitInput"></a>

```typescript
public readonly throttlingBurstLimitInput: number;
```

- *Type:* number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimitInput"></a>

```typescript
public readonly throttlingRateLimitInput: number;
```

- *Type:* number

---

##### `tracingEnabledInput`<sup>Optional</sup> <a name="tracingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabledInput"></a>

```typescript
public readonly tracingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variablesInput"></a>

```typescript
public readonly variablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="cacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheClusterSize`<sup>Required</sup> <a name="cacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentationVersion`<sup>Required</sup> <a name="documentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `tracingEnabled`<sup>Required</sup> <a name="tracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled"></a>

```typescript
public readonly tracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDeploymentStageDescription;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---


### ApigatewayDeploymentStageDescriptionTagsList <a name="ApigatewayDeploymentStageDescriptionTagsList" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get"></a>

```typescript
public get(index: number): ApigatewayDeploymentStageDescriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDeploymentStageDescriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]

---


### ApigatewayDeploymentStageDescriptionTagsOutputReference <a name="ApigatewayDeploymentStageDescriptionTagsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer"></a>

```typescript
import { apigatewayDeployment } from '@cdktn/provider-awscc'

new apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDeploymentStageDescriptionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>

---



