# `bedrockPrompt` Submodule <a name="`bedrockPrompt` Submodule" id="@cdktn/provider-awscc.bedrockPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockPrompt <a name="BedrockPrompt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt awscc_bedrock_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPrompt(scope: Construct, id: string, config: BedrockPromptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig">BedrockPromptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig">BedrockPromptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants">putVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetCustomerEncryptionKeyArn">resetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDefaultVariant">resetDefaultVariant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetVariants">resetVariants</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVariants` <a name="putVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants"></a>

```typescript
public putVariants(value: IResolvable | BedrockPromptVariants[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>[]

---

##### `resetCustomerEncryptionKeyArn` <a name="resetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetCustomerEncryptionKeyArn"></a>

```typescript
public resetCustomerEncryptionKeyArn(): void
```

##### `resetDefaultVariant` <a name="resetDefaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDefaultVariant"></a>

```typescript
public resetDefaultVariant(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVariants` <a name="resetVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetVariants"></a>

```typescript
public resetVariants(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

bedrockPrompt.BedrockPrompt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

bedrockPrompt.BedrockPrompt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

bedrockPrompt.BedrockPrompt.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

bedrockPrompt.BedrockPrompt.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockPrompt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.promptId">promptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variants">variants</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList">BedrockPromptVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArnInput">customerEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariantInput">defaultVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variantsInput">variantsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariant">defaultVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `variants`<sup>Required</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variants"></a>

```typescript
public readonly variants: BedrockPromptVariantsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList">BedrockPromptVariantsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `customerEncryptionKeyArnInput`<sup>Optional</sup> <a name="customerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArnInput"></a>

```typescript
public readonly customerEncryptionKeyArnInput: string;
```

- *Type:* string

---

##### `defaultVariantInput`<sup>Optional</sup> <a name="defaultVariantInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariantInput"></a>

```typescript
public readonly defaultVariantInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `variantsInput`<sup>Optional</sup> <a name="variantsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variantsInput"></a>

```typescript
public readonly variantsInput: IResolvable | BedrockPromptVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>[]

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArn"></a>

```typescript
public readonly customerEncryptionKeyArn: string;
```

- *Type:* string

---

##### `defaultVariant`<sup>Required</sup> <a name="defaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariant"></a>

```typescript
public readonly defaultVariant: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockPromptConfig <a name="BedrockPromptConfig" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptConfig: bedrockPrompt.BedrockPromptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.name">name</a></code> | <code>string</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>string</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.defaultVariant">defaultVariant</a></code> | <code>string</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.description">description</a></code> | <code>string</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.variants">variants</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>[]</code> | List of prompt variants. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.customerEncryptionKeyArn"></a>

```typescript
public readonly customerEncryptionKeyArn: string;
```

- *Type:* string

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#customer_encryption_key_arn BedrockPrompt#customer_encryption_key_arn}

---

##### `defaultVariant`<sup>Optional</sup> <a name="defaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.defaultVariant"></a>

```typescript
public readonly defaultVariant: string;
```

- *Type:* string

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#default_variant BedrockPrompt#default_variant}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#tags BedrockPrompt#tags}

---

##### `variants`<sup>Optional</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.variants"></a>

```typescript
public readonly variants: IResolvable | BedrockPromptVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>[]

List of prompt variants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#variants BedrockPrompt#variants}

---

### BedrockPromptVariants <a name="BedrockPromptVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariants: bedrockPrompt.BedrockPromptVariants = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>string</code> | Contains model-specific configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.genAiResource">genAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | Target resource to invoke with Prompt. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | Model inference configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.metadata">metadata</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>[]</code> | List of metadata to associate with the prompt variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.modelId">modelId</a></code> | <code>string</code> | ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.name">name</a></code> | <code>string</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | Prompt template configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateType">templateType</a></code> | <code>string</code> | Prompt template type. |

---

##### `additionalModelRequestFields`<sup>Optional</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.additionalModelRequestFields"></a>

```typescript
public readonly additionalModelRequestFields: string;
```

- *Type:* string

Contains model-specific configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#additional_model_request_fields BedrockPrompt#additional_model_request_fields}

---

##### `genAiResource`<sup>Optional</sup> <a name="genAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.genAiResource"></a>

```typescript
public readonly genAiResource: BedrockPromptVariantsGenAiResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

Target resource to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#gen_ai_resource BedrockPrompt#gen_ai_resource}

---

##### `inferenceConfiguration`<sup>Optional</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.inferenceConfiguration"></a>

```typescript
public readonly inferenceConfiguration: BedrockPromptVariantsInferenceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

Model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#inference_configuration BedrockPrompt#inference_configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.metadata"></a>

```typescript
public readonly metadata: IResolvable | BedrockPromptVariantsMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>[]

List of metadata to associate with the prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#metadata BedrockPrompt#metadata}

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#model_id BedrockPrompt#model_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `templateConfiguration`<sup>Optional</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: BedrockPromptVariantsTemplateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

Prompt template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#template_configuration BedrockPrompt#template_configuration}

---

##### `templateType`<sup>Optional</sup> <a name="templateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateType"></a>

```typescript
public readonly templateType: string;
```

- *Type:* string

Prompt template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#template_type BedrockPrompt#template_type}

---

### BedrockPromptVariantsGenAiResource <a name="BedrockPromptVariantsGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsGenAiResource: bedrockPrompt.BedrockPromptVariantsGenAiResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | Target Agent to invoke with Prompt. |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.property.agent"></a>

```typescript
public readonly agent: BedrockPromptVariantsGenAiResourceAgent;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

Target Agent to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#agent BedrockPrompt#agent}

---

### BedrockPromptVariantsGenAiResourceAgent <a name="BedrockPromptVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsGenAiResourceAgent: bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.property.agentIdentifier">agentIdentifier</a></code> | <code>string</code> | Arn representation of the Agent Alias. |

---

##### `agentIdentifier`<sup>Optional</sup> <a name="agentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.property.agentIdentifier"></a>

```typescript
public readonly agentIdentifier: string;
```

- *Type:* string

Arn representation of the Agent Alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#agent_identifier BedrockPrompt#agent_identifier}

---

### BedrockPromptVariantsInferenceConfiguration <a name="BedrockPromptVariantsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsInferenceConfiguration: bedrockPrompt.BedrockPromptVariantsInferenceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | Prompt model inference configuration. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.property.text"></a>

```typescript
public readonly text: BedrockPromptVariantsInferenceConfigurationText;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

Prompt model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsInferenceConfigurationText <a name="BedrockPromptVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsInferenceConfigurationText: bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.maxTokens">maxTokens</a></code> | <code>number</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.stopSequences">stopSequences</a></code> | <code>string[]</code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.temperature">temperature</a></code> | <code>number</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.topP">topP</a></code> | <code>number</code> | Cumulative probability cutoff for token selection. |

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#max_tokens BedrockPrompt#max_tokens}

---

##### `stopSequences`<sup>Optional</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.stopSequences"></a>

```typescript
public readonly stopSequences: string[];
```

- *Type:* string[]

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#stop_sequences BedrockPrompt#stop_sequences}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#temperature BedrockPrompt#temperature}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#top_p BedrockPrompt#top_p}

---

### BedrockPromptVariantsMetadata <a name="BedrockPromptVariantsMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsMetadata: bedrockPrompt.BedrockPromptVariantsMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.key">key</a></code> | <code>string</code> | The key of a metadata tag for a prompt variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.value">value</a></code> | <code>string</code> | The value of a metadata tag for a prompt variant. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of a metadata tag for a prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of a metadata tag for a prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#value BedrockPrompt#value}

---

### BedrockPromptVariantsTemplateConfiguration <a name="BedrockPromptVariantsTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfiguration: bedrockPrompt.BedrockPromptVariantsTemplateConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | Configuration for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | Configuration for text prompt template. |

---

##### `chat`<sup>Optional</sup> <a name="chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.chat"></a>

```typescript
public readonly chat: BedrockPromptVariantsTemplateConfigurationChat;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#chat BedrockPrompt#chat}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.text"></a>

```typescript
public readonly text: BedrockPromptVariantsTemplateConfigurationText;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

Configuration for text prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChat <a name="BedrockPromptVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChat: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.inputVariables">inputVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>[]</code> | List of input variables. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.messages">messages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>[]</code> | List of messages for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.systemAttribute">systemAttribute</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>[]</code> | Configuration for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.toolConfiguration">toolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | Tool configuration. |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.inputVariables"></a>

```typescript
public readonly inputVariables: IResolvable | BedrockPromptVariantsTemplateConfigurationChatInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>[]

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.messages"></a>

```typescript
public readonly messages: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>[]

List of messages for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#messages BedrockPrompt#messages}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystem[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>[]

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#system BedrockPrompt#system}

---

##### `toolConfiguration`<sup>Optional</sup> <a name="toolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.toolConfiguration"></a>

```typescript
public readonly toolConfiguration: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

Tool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#tool_configuration BedrockPrompt#tool_configuration}

---

### BedrockPromptVariantsTemplateConfigurationChatInputVariables <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatInputVariables: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.property.name">name</a></code> | <code>string</code> | Name for an input variable. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for an input variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatMessages <a name="BedrockPromptVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatMessages: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.content">content</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>[]</code> | List of Content Blocks. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.role">role</a></code> | <code>string</code> | Conversation roles for the chat prompt. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.content"></a>

```typescript
public readonly content: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>[]

List of Content Blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#content BedrockPrompt#content}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Conversation roles for the chat prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#role BedrockPrompt#role}

---

### BedrockPromptVariantsTemplateConfigurationChatMessagesContent <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatMessagesContent: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.text">text</a></code> | <code>string</code> | Configuration for chat prompt template. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.cachePoint"></a>

```typescript
public readonly cachePoint: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.property.type">type</a></code> | <code>string</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatSystem <a name="BedrockPromptVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatSystem: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.text">text</a></code> | <code>string</code> | Configuration for chat prompt template. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.cachePoint"></a>

```typescript
public readonly cachePoint: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatSystemCachePoint: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.property.type">type</a></code> | <code>string</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfiguration <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatToolConfiguration: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.toolChoice">toolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.tools">tools</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>[]</code> | List of Tools. |

---

##### `toolChoice`<sup>Optional</sup> <a name="toolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.toolChoice"></a>

```typescript
public readonly toolChoice: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#tool_choice BedrockPrompt#tool_choice}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.tools"></a>

```typescript
public readonly tools: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>[]

List of Tools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#tools BedrockPrompt#tools}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.any">any</a></code> | <code>string</code> | Any Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.auto">auto</a></code> | <code>string</code> | Auto Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | Specific Tool choice. |

---

##### `any`<sup>Optional</sup> <a name="any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.any"></a>

```typescript
public readonly any: string;
```

- *Type:* string

Any Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#any BedrockPrompt#any}

---

##### `auto`<sup>Optional</sup> <a name="auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.auto"></a>

```typescript
public readonly auto: string;
```

- *Type:* string

Auto Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#auto BedrockPrompt#auto}

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.tool"></a>

```typescript
public readonly tool: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

Specific Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#tool BedrockPrompt#tool}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name">name</a></code> | <code>string</code> | Tool name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.toolSpec">toolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | Tool specification. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.cachePoint"></a>

```typescript
public readonly cachePoint: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `toolSpec`<sup>Optional</sup> <a name="toolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.toolSpec"></a>

```typescript
public readonly toolSpec: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

Tool specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#tool_spec BedrockPrompt#tool_spec}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.property.type">type</a></code> | <code>string</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.inputSchema">inputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | Tool input schema. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.name">name</a></code> | <code>string</code> | Tool name. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}.

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.inputSchema"></a>

```typescript
public readonly inputSchema: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

Tool input schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#input_schema BedrockPrompt#input_schema}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.property.json">json</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}. |

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}.

---

### BedrockPromptVariantsTemplateConfigurationText <a name="BedrockPromptVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationText: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.inputVariables">inputVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>[]</code> | List of input variables. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.text">text</a></code> | <code>string</code> | Prompt content for String prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.textS3Location">textS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | The identifier for the S3 resource. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.cachePoint"></a>

```typescript
public readonly cachePoint: BedrockPromptVariantsTemplateConfigurationTextCachePoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.inputVariables"></a>

```typescript
public readonly inputVariables: IResolvable | BedrockPromptVariantsTemplateConfigurationTextInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>[]

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Prompt content for String prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

##### `textS3Location`<sup>Optional</sup> <a name="textS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.textS3Location"></a>

```typescript
public readonly textS3Location: BedrockPromptVariantsTemplateConfigurationTextTextS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#text_s3_location BedrockPrompt#text_s3_location}

---

### BedrockPromptVariantsTemplateConfigurationTextCachePoint <a name="BedrockPromptVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationTextCachePoint: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.property.type">type</a></code> | <code>string</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationTextInputVariables <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationTextInputVariables: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.property.name">name</a></code> | <code>string</code> | Name for an input variable. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for an input variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationTextTextS3Location <a name="BedrockPromptVariantsTemplateConfigurationTextTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

const bedrockPromptVariantsTemplateConfigurationTextTextS3Location: bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.bucket">bucket</a></code> | <code>string</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.key">key</a></code> | <code>string</code> | A object key in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.version">version</a></code> | <code>string</code> | The version of the the S3 object to use. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#bucket BedrockPrompt#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the the S3 object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_prompt#version BedrockPrompt#version}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockPromptVariantsGenAiResourceAgentOutputReference <a name="BedrockPromptVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resetAgentIdentifier">resetAgentIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentIdentifier` <a name="resetAgentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resetAgentIdentifier"></a>

```typescript
public resetAgentIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifierInput">agentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">agentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentIdentifierInput`<sup>Optional</sup> <a name="agentIdentifierInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifierInput"></a>

```typescript
public readonly agentIdentifierInput: string;
```

- *Type:* string

---

##### `agentIdentifier`<sup>Required</sup> <a name="agentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```typescript
public readonly agentIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsGenAiResourceAgent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---


### BedrockPromptVariantsGenAiResourceOutputReference <a name="BedrockPromptVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent">putAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resetAgent">resetAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgent` <a name="putAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent"></a>

```typescript
public putAgent(value: BedrockPromptVariantsGenAiResourceAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---

##### `resetAgent` <a name="resetAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resetAgent"></a>

```typescript
public resetAgent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference">BedrockPromptVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agentInput">agentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agent"></a>

```typescript
public readonly agent: BedrockPromptVariantsGenAiResourceAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference">BedrockPromptVariantsGenAiResourceAgentOutputReference</a>

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agentInput"></a>

```typescript
public readonly agentInput: IResolvable | BedrockPromptVariantsGenAiResourceAgent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsGenAiResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---


### BedrockPromptVariantsInferenceConfigurationOutputReference <a name="BedrockPromptVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText"></a>

```typescript
public putText(value: BedrockPromptVariantsInferenceConfigurationText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference">BedrockPromptVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.textInput">textInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.text"></a>

```typescript
public readonly text: BedrockPromptVariantsInferenceConfigurationTextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference">BedrockPromptVariantsInferenceConfigurationTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.textInput"></a>

```typescript
public readonly textInput: IResolvable | BedrockPromptVariantsInferenceConfigurationText;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsInferenceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---


### BedrockPromptVariantsInferenceConfigurationTextOutputReference <a name="BedrockPromptVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetStopSequences">resetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetMaxTokens"></a>

```typescript
public resetMaxTokens(): void
```

##### `resetStopSequences` <a name="resetStopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetStopSequences"></a>

```typescript
public resetStopSequences(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTopP"></a>

```typescript
public resetTopP(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequencesInput">stopSequencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topPInput">topPInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens">maxTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences">stopSequences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokensInput"></a>

```typescript
public readonly maxTokensInput: number;
```

- *Type:* number

---

##### `stopSequencesInput`<sup>Optional</sup> <a name="stopSequencesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequencesInput"></a>

```typescript
public readonly stopSequencesInput: string[];
```

- *Type:* string[]

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topPInput"></a>

```typescript
public readonly topPInput: number;
```

- *Type:* number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```typescript
public readonly stopSequences: string[];
```

- *Type:* string[]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsInferenceConfigurationText;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---


### BedrockPromptVariantsList <a name="BedrockPromptVariantsList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get"></a>

```typescript
public get(index: number): BedrockPromptVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>[]

---


### BedrockPromptVariantsMetadataList <a name="BedrockPromptVariantsMetadataList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get"></a>

```typescript
public get(index: number): BedrockPromptVariantsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>[]

---


### BedrockPromptVariantsMetadataOutputReference <a name="BedrockPromptVariantsMetadataOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>

---


### BedrockPromptVariantsOutputReference <a name="BedrockPromptVariantsOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource">putGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration">putInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration">putTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetAdditionalModelRequestFields">resetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetGenAiResource">resetGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetInferenceConfiguration">resetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateConfiguration">resetTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateType">resetTemplateType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenAiResource` <a name="putGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource"></a>

```typescript
public putGenAiResource(value: BedrockPromptVariantsGenAiResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---

##### `putInferenceConfiguration` <a name="putInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration"></a>

```typescript
public putInferenceConfiguration(value: BedrockPromptVariantsInferenceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata"></a>

```typescript
public putMetadata(value: IResolvable | BedrockPromptVariantsMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>[]

---

##### `putTemplateConfiguration` <a name="putTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration"></a>

```typescript
public putTemplateConfiguration(value: BedrockPromptVariantsTemplateConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---

##### `resetAdditionalModelRequestFields` <a name="resetAdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetAdditionalModelRequestFields"></a>

```typescript
public resetAdditionalModelRequestFields(): void
```

##### `resetGenAiResource` <a name="resetGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetGenAiResource"></a>

```typescript
public resetGenAiResource(): void
```

##### `resetInferenceConfiguration` <a name="resetInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetInferenceConfiguration"></a>

```typescript
public resetInferenceConfiguration(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetModelId` <a name="resetModelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetModelId"></a>

```typescript
public resetModelId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTemplateConfiguration` <a name="resetTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateConfiguration"></a>

```typescript
public resetTemplateConfiguration(): void
```

##### `resetTemplateType` <a name="resetTemplateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateType"></a>

```typescript
public resetTemplateType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResource">genAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference">BedrockPromptVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference">BedrockPromptVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList">BedrockPromptVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFieldsInput">additionalModelRequestFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResourceInput">genAiResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfigurationInput">inferenceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadataInput">metadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfigurationInput">templateConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateTypeInput">templateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateType">templateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `genAiResource`<sup>Required</sup> <a name="genAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResource"></a>

```typescript
public readonly genAiResource: BedrockPromptVariantsGenAiResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference">BedrockPromptVariantsGenAiResourceOutputReference</a>

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfiguration"></a>

```typescript
public readonly inferenceConfiguration: BedrockPromptVariantsInferenceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference">BedrockPromptVariantsInferenceConfigurationOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: BedrockPromptVariantsMetadataList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList">BedrockPromptVariantsMetadataList</a>

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: BedrockPromptVariantsTemplateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationOutputReference</a>

---

##### `additionalModelRequestFieldsInput`<sup>Optional</sup> <a name="additionalModelRequestFieldsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFieldsInput"></a>

```typescript
public readonly additionalModelRequestFieldsInput: string;
```

- *Type:* string

---

##### `genAiResourceInput`<sup>Optional</sup> <a name="genAiResourceInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResourceInput"></a>

```typescript
public readonly genAiResourceInput: IResolvable | BedrockPromptVariantsGenAiResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---

##### `inferenceConfigurationInput`<sup>Optional</sup> <a name="inferenceConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfigurationInput"></a>

```typescript
public readonly inferenceConfigurationInput: IResolvable | BedrockPromptVariantsInferenceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | BedrockPromptVariantsMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>[]

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `templateConfigurationInput`<sup>Optional</sup> <a name="templateConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfigurationInput"></a>

```typescript
public readonly templateConfigurationInput: IResolvable | BedrockPromptVariantsTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---

##### `templateTypeInput`<sup>Optional</sup> <a name="templateTypeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateTypeInput"></a>

```typescript
public readonly templateTypeInput: string;
```

- *Type:* string

---

##### `additionalModelRequestFields`<sup>Required</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFields"></a>

```typescript
public readonly additionalModelRequestFields: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateType"></a>

```typescript
public readonly templateType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariants;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>

---


### BedrockPromptVariantsTemplateConfigurationChatInputVariablesList <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```typescript
public get(index: number): BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>[]

---


### BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatInputVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentList <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```typescript
public get(index: number): BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>[]

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint"></a>

```typescript
public putCachePoint(value: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetCachePoint"></a>

```typescript
public resetCachePoint(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```typescript
public readonly cachePoint: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePointInput"></a>

```typescript
public readonly cachePointInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesList <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get"></a>

```typescript
public get(index: number): BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>[]

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent"></a>

```typescript
public putContent(value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>[]

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```typescript
public readonly content: BedrockPromptVariantsTemplateConfigurationChatMessagesContentList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessagesContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>

---


### BedrockPromptVariantsTemplateConfigurationChatOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute">putSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration">putToolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetToolConfiguration">resetToolConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables"></a>

```typescript
public putInputVariables(value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatInputVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>[]

---

##### `putMessages` <a name="putMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>[]

---

##### `putSystemAttribute` <a name="putSystemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute"></a>

```typescript
public putSystemAttribute(value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystem[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>[]

---

##### `putToolConfiguration` <a name="putToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration"></a>

```typescript
public putToolConfiguration(value: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetInputVariables"></a>

```typescript
public resetInputVariables(): void
```

##### `resetMessages` <a name="resetMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetSystemAttribute"></a>

```typescript
public resetSystemAttribute(): void
```

##### `resetToolConfiguration` <a name="resetToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetToolConfiguration"></a>

```typescript
public resetToolConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList">BedrockPromptVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">systemAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList">BedrockPromptVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">toolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfigurationInput">toolConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: BedrockPromptVariantsTemplateConfigurationChatInputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```typescript
public readonly messages: BedrockPromptVariantsTemplateConfigurationChatMessagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList">BedrockPromptVariantsTemplateConfigurationChatMessagesList</a>

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: BedrockPromptVariantsTemplateConfigurationChatSystemList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList">BedrockPromptVariantsTemplateConfigurationChatSystemList</a>

---

##### `toolConfiguration`<sup>Required</sup> <a name="toolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```typescript
public readonly toolConfiguration: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariablesInput"></a>

```typescript
public readonly inputVariablesInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>[]

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>[]

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttributeInput"></a>

```typescript
public readonly systemAttributeInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystem[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>[]

---

##### `toolConfigurationInput`<sup>Optional</sup> <a name="toolConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfigurationInput"></a>

```typescript
public readonly toolConfigurationInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---


### BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatSystemList <a name="BedrockPromptVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get"></a>

```typescript
public get(index: number): BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystem[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>[]

---


### BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint"></a>

```typescript
public putCachePoint(value: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetCachePoint"></a>

```typescript
public resetCachePoint(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```typescript
public readonly cachePoint: BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePointInput"></a>

```typescript
public readonly cachePointInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatSystem;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice">putToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools">putTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice">resetToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetTools">resetTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolChoice` <a name="putToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice"></a>

```typescript
public putToolChoice(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---

##### `putTools` <a name="putTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools"></a>

```typescript
public putTools(value: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>[]

---

##### `resetToolChoice` <a name="resetToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice"></a>

```typescript
public resetToolChoice(): void
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetTools"></a>

```typescript
public resetTools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">toolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput">toolChoiceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolsInput">toolsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolChoice`<sup>Required</sup> <a name="toolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```typescript
public readonly toolChoice: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```typescript
public readonly tools: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `toolChoiceInput`<sup>Optional</sup> <a name="toolChoiceInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput"></a>

```typescript
public readonly toolChoiceInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolsInput"></a>

```typescript
public readonly toolsInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool">putTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny">resetAny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto">resetAuto</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool">resetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTool` <a name="putTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool"></a>

```typescript
public putTool(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---

##### `resetAny` <a name="resetAny" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny"></a>

```typescript
public resetAny(): void
```

##### `resetAuto` <a name="resetAuto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto"></a>

```typescript
public resetAuto(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput">anyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput">autoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput">toolInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">any</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">auto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```typescript
public readonly tool: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `anyInput`<sup>Optional</sup> <a name="anyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput"></a>

```typescript
public readonly anyInput: string;
```

- *Type:* string

---

##### `autoInput`<sup>Optional</sup> <a name="autoInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput"></a>

```typescript
public readonly autoInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---

##### `any`<sup>Required</sup> <a name="any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```typescript
public readonly any: string;
```

- *Type:* string

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```typescript
public readonly auto: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```typescript
public get(index: number): BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>[]

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec">putToolSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetToolSpec">resetToolSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint"></a>

```typescript
public putCachePoint(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---

##### `putToolSpec` <a name="putToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec"></a>

```typescript
public putToolSpec(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetCachePoint"></a>

```typescript
public resetCachePoint(): void
```

##### `resetToolSpec` <a name="resetToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetToolSpec"></a>

```typescript
public resetToolSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">toolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpecInput">toolSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```typescript
public readonly cachePoint: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `toolSpec`<sup>Required</sup> <a name="toolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```typescript
public readonly toolSpec: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePointInput"></a>

```typescript
public readonly cachePointInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---

##### `toolSpecInput`<sup>Optional</sup> <a name="toolSpecInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpecInput"></a>

```typescript
public readonly toolSpecInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resetJson">resetJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJson` <a name="resetJson" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.jsonInput">jsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema">putInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputSchema` <a name="putInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema"></a>

```typescript
public putInputSchema(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetInputSchema"></a>

```typescript
public resetInputSchema(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```typescript
public readonly inputSchema: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchemaInput"></a>

```typescript
public readonly inputSchemaInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### BedrockPromptVariantsTemplateConfigurationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat">putChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetChat">resetChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChat` <a name="putChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat"></a>

```typescript
public putChat(value: BedrockPromptVariantsTemplateConfigurationChat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---

##### `putText` <a name="putText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText"></a>

```typescript
public putText(value: BedrockPromptVariantsTemplateConfigurationText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---

##### `resetChat` <a name="resetChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetChat"></a>

```typescript
public resetChat(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference">BedrockPromptVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference">BedrockPromptVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chatInput">chatInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.textInput">textInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chat`<sup>Required</sup> <a name="chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chat"></a>

```typescript
public readonly chat: BedrockPromptVariantsTemplateConfigurationChatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference">BedrockPromptVariantsTemplateConfigurationChatOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.text"></a>

```typescript
public readonly text: BedrockPromptVariantsTemplateConfigurationTextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference">BedrockPromptVariantsTemplateConfigurationTextOutputReference</a>

---

##### `chatInput`<sup>Optional</sup> <a name="chatInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chatInput"></a>

```typescript
public readonly chatInput: IResolvable | BedrockPromptVariantsTemplateConfigurationChat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.textInput"></a>

```typescript
public readonly textInput: IResolvable | BedrockPromptVariantsTemplateConfigurationText;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---


### BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationTextCachePoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationTextInputVariablesList <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```typescript
public get(index: number): BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationTextInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>[]

---


### BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationTextInputVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>

---


### BedrockPromptVariantsTemplateConfigurationTextOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location">putTextS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetTextS3Location">resetTextS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint"></a>

```typescript
public putCachePoint(value: BedrockPromptVariantsTemplateConfigurationTextCachePoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables"></a>

```typescript
public putInputVariables(value: IResolvable | BedrockPromptVariantsTemplateConfigurationTextInputVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>[]

---

##### `putTextS3Location` <a name="putTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location"></a>

```typescript
public putTextS3Location(value: BedrockPromptVariantsTemplateConfigurationTextTextS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetCachePoint"></a>

```typescript
public resetCachePoint(): void
```

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetInputVariables"></a>

```typescript
public resetInputVariables(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTextS3Location` <a name="resetTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetTextS3Location"></a>

```typescript
public resetTextS3Location(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location">textS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3LocationInput">textS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```typescript
public readonly cachePoint: BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: BedrockPromptVariantsTemplateConfigurationTextInputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `textS3Location`<sup>Required</sup> <a name="textS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location"></a>

```typescript
public readonly textS3Location: BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePointInput"></a>

```typescript
public readonly cachePointInput: IResolvable | BedrockPromptVariantsTemplateConfigurationTextCachePoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariablesInput"></a>

```typescript
public readonly inputVariablesInput: IResolvable | BedrockPromptVariantsTemplateConfigurationTextInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>[]

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `textS3LocationInput`<sup>Optional</sup> <a name="textS3LocationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3LocationInput"></a>

```typescript
public readonly textS3LocationInput: IResolvable | BedrockPromptVariantsTemplateConfigurationTextTextS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationText;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---


### BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer"></a>

```typescript
import { bedrockPrompt } from '@cdktn/provider-awscc'

new bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockPromptVariantsTemplateConfigurationTextTextS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---



