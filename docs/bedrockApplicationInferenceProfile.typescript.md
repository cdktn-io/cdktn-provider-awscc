# `bedrockApplicationInferenceProfile` Submodule <a name="`bedrockApplicationInferenceProfile` Submodule" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockApplicationInferenceProfile <a name="BedrockApplicationInferenceProfile" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile(scope: Construct, id: string, config: BedrockApplicationInferenceProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig">BedrockApplicationInferenceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig">BedrockApplicationInferenceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource">putModelSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetModelSource">resetModelSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putModelSource` <a name="putModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource"></a>

```typescript
public putModelSource(value: BedrockApplicationInferenceProfileModelSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | BedrockApplicationInferenceProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetModelSource` <a name="resetModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetModelSource"></a>

```typescript
public resetModelSource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockApplicationInferenceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockApplicationInferenceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockApplicationInferenceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileArn">inferenceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileId">inferenceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileIdentifier">inferenceProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList">BedrockApplicationInferenceProfileModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSource">modelSource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference">BedrockApplicationInferenceProfileModelSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList">BedrockApplicationInferenceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileNameInput">inferenceProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSourceInput">modelSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileName">inferenceProfileName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inferenceProfileArn`<sup>Required</sup> <a name="inferenceProfileArn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileArn"></a>

```typescript
public readonly inferenceProfileArn: string;
```

- *Type:* string

---

##### `inferenceProfileId`<sup>Required</sup> <a name="inferenceProfileId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileId"></a>

```typescript
public readonly inferenceProfileId: string;
```

- *Type:* string

---

##### `inferenceProfileIdentifier`<sup>Required</sup> <a name="inferenceProfileIdentifier" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileIdentifier"></a>

```typescript
public readonly inferenceProfileIdentifier: string;
```

- *Type:* string

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.models"></a>

```typescript
public readonly models: BedrockApplicationInferenceProfileModelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList">BedrockApplicationInferenceProfileModelsList</a>

---

##### `modelSource`<sup>Required</sup> <a name="modelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSource"></a>

```typescript
public readonly modelSource: BedrockApplicationInferenceProfileModelSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference">BedrockApplicationInferenceProfileModelSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tags"></a>

```typescript
public readonly tags: BedrockApplicationInferenceProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList">BedrockApplicationInferenceProfileTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inferenceProfileNameInput`<sup>Optional</sup> <a name="inferenceProfileNameInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileNameInput"></a>

```typescript
public readonly inferenceProfileNameInput: string;
```

- *Type:* string

---

##### `modelSourceInput`<sup>Optional</sup> <a name="modelSourceInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSourceInput"></a>

```typescript
public readonly modelSourceInput: IResolvable | BedrockApplicationInferenceProfileModelSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BedrockApplicationInferenceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inferenceProfileName`<sup>Required</sup> <a name="inferenceProfileName" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileName"></a>

```typescript
public readonly inferenceProfileName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockApplicationInferenceProfileConfig <a name="BedrockApplicationInferenceProfileConfig" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

const bedrockApplicationInferenceProfileConfig: bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.inferenceProfileName">inferenceProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.description">description</a></code> | <code>string</code> | Description of the inference profile. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.modelSource">modelSource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | Various ways to encode a list of models in a CreateInferenceProfile request. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]</code> | List of Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `inferenceProfileName`<sup>Required</sup> <a name="inferenceProfileName" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.inferenceProfileName"></a>

```typescript
public readonly inferenceProfileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the inference profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#description BedrockApplicationInferenceProfile#description}

---

##### `modelSource`<sup>Optional</sup> <a name="modelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.modelSource"></a>

```typescript
public readonly modelSource: BedrockApplicationInferenceProfileModelSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

Various ways to encode a list of models in a CreateInferenceProfile request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#model_source BedrockApplicationInferenceProfile#model_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BedrockApplicationInferenceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#tags BedrockApplicationInferenceProfile#tags}

---

### BedrockApplicationInferenceProfileModels <a name="BedrockApplicationInferenceProfileModels" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

const bedrockApplicationInferenceProfileModels: bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels = { ... }
```


### BedrockApplicationInferenceProfileModelSource <a name="BedrockApplicationInferenceProfileModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

const bedrockApplicationInferenceProfileModelSource: bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.property.copyFrom">copyFrom</a></code> | <code>string</code> | Source arns for a custom inference profile to copy its regional load balancing config from. |

---

##### `copyFrom`<sup>Optional</sup> <a name="copyFrom" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.property.copyFrom"></a>

```typescript
public readonly copyFrom: string;
```

- *Type:* string

Source arns for a custom inference profile to copy its regional load balancing config from.

This
can either be a foundation model or predefined inference profile ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#copy_from BedrockApplicationInferenceProfile#copy_from}

---

### BedrockApplicationInferenceProfileTags <a name="BedrockApplicationInferenceProfileTags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

const bedrockApplicationInferenceProfileTags: bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.key">key</a></code> | <code>string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.value">value</a></code> | <code>string</code> | Tag Value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#key BedrockApplicationInferenceProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#value BedrockApplicationInferenceProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockApplicationInferenceProfileModelsList <a name="BedrockApplicationInferenceProfileModelsList" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get"></a>

```typescript
public get(index: number): BedrockApplicationInferenceProfileModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BedrockApplicationInferenceProfileModelSourceOutputReference <a name="BedrockApplicationInferenceProfileModelSourceOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resetCopyFrom">resetCopyFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCopyFrom` <a name="resetCopyFrom" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resetCopyFrom"></a>

```typescript
public resetCopyFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFromInput">copyFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom">copyFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyFromInput`<sup>Optional</sup> <a name="copyFromInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFromInput"></a>

```typescript
public readonly copyFromInput: string;
```

- *Type:* string

---

##### `copyFrom`<sup>Required</sup> <a name="copyFrom" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom"></a>

```typescript
public readonly copyFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockApplicationInferenceProfileModelSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

---


### BedrockApplicationInferenceProfileModelsOutputReference <a name="BedrockApplicationInferenceProfileModelsOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels">BedrockApplicationInferenceProfileModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockApplicationInferenceProfileModels;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels">BedrockApplicationInferenceProfileModels</a>

---


### BedrockApplicationInferenceProfileTagsList <a name="BedrockApplicationInferenceProfileTagsList" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get"></a>

```typescript
public get(index: number): BedrockApplicationInferenceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockApplicationInferenceProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]

---


### BedrockApplicationInferenceProfileTagsOutputReference <a name="BedrockApplicationInferenceProfileTagsOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer"></a>

```typescript
import { bedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockApplicationInferenceProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>

---



