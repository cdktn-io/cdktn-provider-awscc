# `codepipelineWebhook` Submodule <a name="`codepipelineWebhook` Submodule" id="@cdktn/provider-awscc.codepipelineWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineWebhook <a name="CodepipelineWebhook" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook awscc_codepipeline_webhook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

new codepipelineWebhook.CodepipelineWebhook(scope: Construct, id: string, config: CodepipelineWebhookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig">CodepipelineWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig">CodepipelineWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetRegisterWithThirdParty">resetRegisterWithThirdParty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTargetPipelineVersion">resetTargetPipelineVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration"></a>

```typescript
public putAuthenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters"></a>

```typescript
public putFilters(value: IResolvable | CodepipelineWebhookFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags"></a>

```typescript
public putTags(value: IResolvable | CodepipelineWebhookTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegisterWithThirdParty` <a name="resetRegisterWithThirdParty" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetRegisterWithThirdParty"></a>

```typescript
public resetRegisterWithThirdParty(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetPipelineVersion` <a name="resetTargetPipelineVersion" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTargetPipelineVersion"></a>

```typescript
public resetTargetPipelineVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodepipelineWebhook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

codepipelineWebhook.CodepipelineWebhook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

codepipelineWebhook.CodepipelineWebhook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

codepipelineWebhook.CodepipelineWebhook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

codepipelineWebhook.CodepipelineWebhook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CodepipelineWebhook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodepipelineWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodepipelineWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodepipelineWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList">CodepipelineWebhookFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList">CodepipelineWebhookTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.webhookId">webhookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput">authenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdPartyInput">registerWithThirdPartyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput">targetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput">targetPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersionInput">targetPipelineVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authentication">authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdParty">registerWithThirdParty</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetAction">targetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline">targetPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersion">targetPipelineVersion</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: CodepipelineWebhookAuthenticationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filters"></a>

```typescript
public readonly filters: CodepipelineWebhookFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList">CodepipelineWebhookFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tags"></a>

```typescript
public readonly tags: CodepipelineWebhookTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList">CodepipelineWebhookTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `webhookId`<sup>Required</sup> <a name="webhookId" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.webhookId"></a>

```typescript
public readonly webhookId: string;
```

- *Type:* string

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput"></a>

```typescript
public readonly authenticationConfigurationInput: IResolvable | CodepipelineWebhookAuthenticationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | CodepipelineWebhookFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `registerWithThirdPartyInput`<sup>Optional</sup> <a name="registerWithThirdPartyInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdPartyInput"></a>

```typescript
public readonly registerWithThirdPartyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CodepipelineWebhookTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]

---

##### `targetActionInput`<sup>Optional</sup> <a name="targetActionInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput"></a>

```typescript
public readonly targetActionInput: string;
```

- *Type:* string

---

##### `targetPipelineInput`<sup>Optional</sup> <a name="targetPipelineInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput"></a>

```typescript
public readonly targetPipelineInput: string;
```

- *Type:* string

---

##### `targetPipelineVersionInput`<sup>Optional</sup> <a name="targetPipelineVersionInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersionInput"></a>

```typescript
public readonly targetPipelineVersionInput: number;
```

- *Type:* number

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `registerWithThirdParty`<sup>Required</sup> <a name="registerWithThirdParty" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdParty"></a>

```typescript
public readonly registerWithThirdParty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetAction"></a>

```typescript
public readonly targetAction: string;
```

- *Type:* string

---

##### `targetPipeline`<sup>Required</sup> <a name="targetPipeline" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline"></a>

```typescript
public readonly targetPipeline: string;
```

- *Type:* string

---

##### `targetPipelineVersion`<sup>Required</sup> <a name="targetPipelineVersion" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersion"></a>

```typescript
public readonly targetPipelineVersion: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineWebhookAuthenticationConfiguration <a name="CodepipelineWebhookAuthenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

const codepipelineWebhookAuthenticationConfiguration: codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange">allowedIpRange</a></code> | <code>string</code> | The property used to configure acceptance of webhooks in an IP address range. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken">secretToken</a></code> | <code>string</code> | The property used to configure GitHub authentication. For GITHUB_HMAC, only the SecretToken property must be set. |

---

##### `allowedIpRange`<sup>Optional</sup> <a name="allowedIpRange" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange"></a>

```typescript
public readonly allowedIpRange: string;
```

- *Type:* string

The property used to configure acceptance of webhooks in an IP address range.

For IP, only the AllowedIPRange property must be set. This property must be set to a valid CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}

---

##### `secretToken`<sup>Optional</sup> <a name="secretToken" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken"></a>

```typescript
public readonly secretToken: string;
```

- *Type:* string

The property used to configure GitHub authentication. For GITHUB_HMAC, only the SecretToken property must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}

---

### CodepipelineWebhookConfig <a name="CodepipelineWebhookConfig" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

const codepipelineWebhookConfig: codepipelineWebhook.CodepipelineWebhookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication">authentication</a></code> | <code>string</code> | Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | Properties that configure the authentication applied to incoming webhook trigger requests. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]</code> | A list of rules applied to the body/payload sent in the POST request to a webhook URL. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction">targetAction</a></code> | <code>string</code> | The name of the action in a pipeline you want to connect to the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline">targetPipeline</a></code> | <code>string</code> | The name of the pipeline you want to connect to the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.name">name</a></code> | <code>string</code> | The name of the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.registerWithThirdParty">registerWithThirdParty</a></code> | <code>boolean \| cdktn.IResolvable</code> | Configures a connection between the webhook that was created and the external tool with events to be detected. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipelineVersion">targetPipelineVersion</a></code> | <code>number</code> | The version number of the pipeline to be connected to the trigger request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#authentication CodepipelineWebhook#authentication}

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: CodepipelineWebhookAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

Properties that configure the authentication applied to incoming webhook trigger requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.filters"></a>

```typescript
public readonly filters: IResolvable | CodepipelineWebhookFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]

A list of rules applied to the body/payload sent in the POST request to a webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#filters CodepipelineWebhook#filters}

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction"></a>

```typescript
public readonly targetAction: string;
```

- *Type:* string

The name of the action in a pipeline you want to connect to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#target_action CodepipelineWebhook#target_action}

---

##### `targetPipeline`<sup>Required</sup> <a name="targetPipeline" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline"></a>

```typescript
public readonly targetPipeline: string;
```

- *Type:* string

The name of the pipeline you want to connect to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#name CodepipelineWebhook#name}

---

##### `registerWithThirdParty`<sup>Optional</sup> <a name="registerWithThirdParty" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.registerWithThirdParty"></a>

```typescript
public readonly registerWithThirdParty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Configures a connection between the webhook that was created and the external tool with events to be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#register_with_third_party CodepipelineWebhook#register_with_third_party}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CodepipelineWebhookTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#tags CodepipelineWebhook#tags}

---

##### `targetPipelineVersion`<sup>Optional</sup> <a name="targetPipelineVersion" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipelineVersion"></a>

```typescript
public readonly targetPipelineVersion: number;
```

- *Type:* number

The version number of the pipeline to be connected to the trigger request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#target_pipeline_version CodepipelineWebhook#target_pipeline_version}

---

### CodepipelineWebhookFilters <a name="CodepipelineWebhookFilters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

const codepipelineWebhookFilters: codepipelineWebhook.CodepipelineWebhookFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.jsonPath">jsonPath</a></code> | <code>string</code> | A JsonPath expression that is applied to the body/payload of the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.matchEquals">matchEquals</a></code> | <code>string</code> | The value selected by the JsonPath expression must match what is supplied in the MatchEquals field. |

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

A JsonPath expression that is applied to the body/payload of the webhook.

The value selected by the JsonPath expression must match the value specified in the MatchEquals field. Otherwise, the request is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#json_path CodepipelineWebhook#json_path}

---

##### `matchEquals`<sup>Optional</sup> <a name="matchEquals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.matchEquals"></a>

```typescript
public readonly matchEquals: string;
```

- *Type:* string

The value selected by the JsonPath expression must match what is supplied in the MatchEquals field.

Otherwise, the request is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}

---

### CodepipelineWebhookTags <a name="CodepipelineWebhookTags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

const codepipelineWebhookTags: codepipelineWebhook.CodepipelineWebhookTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#key CodepipelineWebhook#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_webhook#value CodepipelineWebhook#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineWebhookAuthenticationConfigurationOutputReference <a name="CodepipelineWebhookAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

new codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange">resetAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken">resetSecretToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedIpRange` <a name="resetAllowedIpRange" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange"></a>

```typescript
public resetAllowedIpRange(): void
```

##### `resetSecretToken` <a name="resetSecretToken" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken"></a>

```typescript
public resetSecretToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput">allowedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput">secretTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange">allowedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken">secretToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIpRangeInput`<sup>Optional</sup> <a name="allowedIpRangeInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput"></a>

```typescript
public readonly allowedIpRangeInput: string;
```

- *Type:* string

---

##### `secretTokenInput`<sup>Optional</sup> <a name="secretTokenInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput"></a>

```typescript
public readonly secretTokenInput: string;
```

- *Type:* string

---

##### `allowedIpRange`<sup>Required</sup> <a name="allowedIpRange" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange"></a>

```typescript
public readonly allowedIpRange: string;
```

- *Type:* string

---

##### `secretToken`<sup>Required</sup> <a name="secretToken" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken"></a>

```typescript
public readonly secretToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineWebhookAuthenticationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---


### CodepipelineWebhookFiltersList <a name="CodepipelineWebhookFiltersList" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

new codepipelineWebhook.CodepipelineWebhookFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get"></a>

```typescript
public get(index: number): CodepipelineWebhookFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineWebhookFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>[]

---


### CodepipelineWebhookFiltersOutputReference <a name="CodepipelineWebhookFiltersOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

new codepipelineWebhook.CodepipelineWebhookFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resetMatchEquals">resetMatchEquals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchEquals` <a name="resetMatchEquals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resetMatchEquals"></a>

```typescript
public resetMatchEquals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEqualsInput">matchEqualsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPath">jsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEquals">matchEquals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPathInput"></a>

```typescript
public readonly jsonPathInput: string;
```

- *Type:* string

---

##### `matchEqualsInput`<sup>Optional</sup> <a name="matchEqualsInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEqualsInput"></a>

```typescript
public readonly matchEqualsInput: string;
```

- *Type:* string

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

---

##### `matchEquals`<sup>Required</sup> <a name="matchEquals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEquals"></a>

```typescript
public readonly matchEquals: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineWebhookFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>

---


### CodepipelineWebhookTagsList <a name="CodepipelineWebhookTagsList" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

new codepipelineWebhook.CodepipelineWebhookTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get"></a>

```typescript
public get(index: number): CodepipelineWebhookTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineWebhookTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>[]

---


### CodepipelineWebhookTagsOutputReference <a name="CodepipelineWebhookTagsOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktn/provider-awscc'

new codepipelineWebhook.CodepipelineWebhookTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineWebhookTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>

---



