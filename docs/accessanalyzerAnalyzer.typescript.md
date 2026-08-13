# `accessanalyzerAnalyzer` Submodule <a name="`accessanalyzerAnalyzer` Submodule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerAnalyzer <a name="AccessanalyzerAnalyzer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer awscc_accessanalyzer_analyzer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzer(scope: Construct, id: string, config: AccessanalyzerAnalyzerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig">AccessanalyzerAnalyzerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig">AccessanalyzerAnalyzerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putAnalyzerConfiguration">putAnalyzerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putArchiveRules">putArchiveRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetAnalyzerConfiguration">resetAnalyzerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetAnalyzerName">resetAnalyzerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetArchiveRules">resetArchiveRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalyzerConfiguration` <a name="putAnalyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putAnalyzerConfiguration"></a>

```typescript
public putAnalyzerConfiguration(value: AccessanalyzerAnalyzerAnalyzerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putAnalyzerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a>

---

##### `putArchiveRules` <a name="putArchiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putArchiveRules"></a>

```typescript
public putArchiveRules(value: IResolvable | AccessanalyzerAnalyzerArchiveRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putArchiveRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putTags"></a>

```typescript
public putTags(value: IResolvable | AccessanalyzerAnalyzerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a>[]

---

##### `resetAnalyzerConfiguration` <a name="resetAnalyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetAnalyzerConfiguration"></a>

```typescript
public resetAnalyzerConfiguration(): void
```

##### `resetAnalyzerName` <a name="resetAnalyzerName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetAnalyzerName"></a>

```typescript
public resetAnalyzerName(): void
```

##### `resetArchiveRules` <a name="resetArchiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetArchiveRules"></a>

```typescript
public resetArchiveRules(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccessanalyzerAnalyzer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccessanalyzerAnalyzer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessanalyzerAnalyzer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessanalyzerAnalyzer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccessanalyzerAnalyzer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerConfiguration">analyzerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.archiveRules">archiveRules</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList">AccessanalyzerAnalyzerArchiveRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList">AccessanalyzerAnalyzerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerConfigurationInput">analyzerConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a> \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerNameInput">analyzerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.archiveRulesInput">archiveRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerName">analyzerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `analyzerConfiguration`<sup>Required</sup> <a name="analyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerConfiguration"></a>

```typescript
public readonly analyzerConfiguration: AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference</a>

---

##### `archiveRules`<sup>Required</sup> <a name="archiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.archiveRules"></a>

```typescript
public readonly archiveRules: AccessanalyzerAnalyzerArchiveRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList">AccessanalyzerAnalyzerArchiveRulesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tags"></a>

```typescript
public readonly tags: AccessanalyzerAnalyzerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList">AccessanalyzerAnalyzerTagsList</a>

---

##### `analyzerConfigurationInput`<sup>Optional</sup> <a name="analyzerConfigurationInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerConfigurationInput"></a>

```typescript
public readonly analyzerConfigurationInput: AccessanalyzerAnalyzerAnalyzerConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a> | cdktn.IResolvable

---

##### `analyzerNameInput`<sup>Optional</sup> <a name="analyzerNameInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerNameInput"></a>

```typescript
public readonly analyzerNameInput: string;
```

- *Type:* string

---

##### `archiveRulesInput`<sup>Optional</sup> <a name="archiveRulesInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.archiveRulesInput"></a>

```typescript
public readonly archiveRulesInput: IResolvable | AccessanalyzerAnalyzerArchiveRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AccessanalyzerAnalyzerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerAnalyzerAnalyzerConfiguration <a name="AccessanalyzerAnalyzerAnalyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerAnalyzerConfiguration: accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.property.internalAccessConfiguration">internalAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a></code> | Specifies the configuration of an internal access analyzer for an AWS organization or account. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.property.unusedAccessConfiguration">unusedAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a></code> | The Configuration for Unused Access Analyzer. |

---

##### `internalAccessConfiguration`<sup>Optional</sup> <a name="internalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.property.internalAccessConfiguration"></a>

```typescript
public readonly internalAccessConfiguration: AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a>

Specifies the configuration of an internal access analyzer for an AWS organization or account.

This configuration determines how the analyzer evaluates internal access within your AWS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#internal_access_configuration AccessanalyzerAnalyzer#internal_access_configuration}

---

##### `unusedAccessConfiguration`<sup>Optional</sup> <a name="unusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.property.unusedAccessConfiguration"></a>

```typescript
public readonly unusedAccessConfiguration: AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a>

The Configuration for Unused Access Analyzer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#unused_access_configuration AccessanalyzerAnalyzer#unused_access_configuration}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration: accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration.property.internalAccessAnalysisRule">internalAccessAnalysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a></code> | Contains information about analysis rules for the internal access analyzer. |

---

##### `internalAccessAnalysisRule`<sup>Optional</sup> <a name="internalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration.property.internalAccessAnalysisRule"></a>

```typescript
public readonly internalAccessAnalysisRule: AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a>

Contains information about analysis rules for the internal access analyzer.

Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#internal_access_analysis_rule AccessanalyzerAnalyzer#internal_access_analysis_rule}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule: accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule.property.inclusions">inclusions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>[]</code> | A list of rules for the internal access analyzer containing criteria to include in analysis. |

---

##### `inclusions`<sup>Optional</sup> <a name="inclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule.property.inclusions"></a>

```typescript
public readonly inclusions: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>[]

A list of rules for the internal access analyzer containing criteria to include in analysis.

Only resources that meet the rule criteria will generate findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#inclusions AccessanalyzerAnalyzer#inclusions}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions: accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.accountIds">accountIds</a></code> | <code>string[]</code> | A list of AWS account IDs to apply to the internal access analysis rule criteria. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | A list of resource ARNs to apply to the internal access analysis rule criteria. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | A list of resource types to apply to the internal access analysis rule criteria. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

A list of AWS account IDs to apply to the internal access analysis rule criteria.

Account IDs can only be applied to the analysis rule criteria for organization-level analyzers and cannot include the organization owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#account_ids AccessanalyzerAnalyzer#account_ids}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

A list of resource ARNs to apply to the internal access analysis rule criteria.

The analyzer will only generate findings for resources that match these ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#resource_arns AccessanalyzerAnalyzer#resource_arns}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

A list of resource types to apply to the internal access analysis rule criteria.

The analyzer will only generate findings for resources of these types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#resource_types AccessanalyzerAnalyzer#resource_types}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration: accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.property.analysisRule">analysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a></code> | Contains information about rules for the analyzer. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.property.unusedAccessAge">unusedAccessAge</a></code> | <code>number</code> | The specified access age in days for which to generate findings for unused access. |

---

##### `analysisRule`<sup>Optional</sup> <a name="analysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.property.analysisRule"></a>

```typescript
public readonly analysisRule: AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a>

Contains information about rules for the analyzer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#analysis_rule AccessanalyzerAnalyzer#analysis_rule}

---

##### `unusedAccessAge`<sup>Optional</sup> <a name="unusedAccessAge" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.property.unusedAccessAge"></a>

```typescript
public readonly unusedAccessAge: number;
```

- *Type:* number

The specified access age in days for which to generate findings for unused access.

For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#unused_access_age AccessanalyzerAnalyzer#unused_access_age}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule: accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule.property.exclusions">exclusions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>[]</code> | A list of rules for the analyzer containing criteria to exclude from analysis. |

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule.property.exclusions"></a>

```typescript
public readonly exclusions: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>[]

A list of rules for the analyzer containing criteria to exclude from analysis.

Entities that meet the rule criteria will not generate findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#exclusions AccessanalyzerAnalyzer#exclusions}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions: accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.property.accountIds">accountIds</a></code> | <code>string[]</code> | A list of AWS account IDs to apply to the analysis rule criteria. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.property.resourceTags">resourceTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>[]</code> | An array of key-value pairs to match for your resources. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

A list of AWS account IDs to apply to the analysis rule criteria.

The accounts cannot include the organization analyzer owner account. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#account_ids AccessanalyzerAnalyzer#account_ids}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.property.resourceTags"></a>

```typescript
public readonly resourceTags: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>[]

An array of key-value pairs to match for your resources.

You can use the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with aws:.

For the tag value, you can specify a value that is 0 to 256 characters in length. If the specified tag value is 0 characters, the rule is applied to all principals with the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#resource_tags AccessanalyzerAnalyzer#resource_tags}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags: accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags = { ... }
```


### AccessanalyzerAnalyzerArchiveRules <a name="AccessanalyzerAnalyzerArchiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerArchiveRules: accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#filter AccessanalyzerAnalyzer#filter}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.property.ruleName">ruleName</a></code> | <code>string</code> | The archive rule name. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.property.filter"></a>

```typescript
public readonly filter: IResolvable | AccessanalyzerAnalyzerArchiveRulesFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#filter AccessanalyzerAnalyzer#filter}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The archive rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#rule_name AccessanalyzerAnalyzer#rule_name}

---

### AccessanalyzerAnalyzerArchiveRulesFilter <a name="AccessanalyzerAnalyzerArchiveRulesFilter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerArchiveRulesFilter: accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.contains">contains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#contains AccessanalyzerAnalyzer#contains}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.eq">eq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#eq AccessanalyzerAnalyzer#eq}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.exists">exists</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#exists AccessanalyzerAnalyzer#exists}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.neq">neq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#neq AccessanalyzerAnalyzer#neq}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.property">property</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#property AccessanalyzerAnalyzer#property}. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.contains"></a>

```typescript
public readonly contains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#contains AccessanalyzerAnalyzer#contains}.

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.eq"></a>

```typescript
public readonly eq: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#eq AccessanalyzerAnalyzer#eq}.

---

##### `exists`<sup>Optional</sup> <a name="exists" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.exists"></a>

```typescript
public readonly exists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#exists AccessanalyzerAnalyzer#exists}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.neq"></a>

```typescript
public readonly neq: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#neq AccessanalyzerAnalyzer#neq}.

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#property AccessanalyzerAnalyzer#property}.

---

### AccessanalyzerAnalyzerConfig <a name="AccessanalyzerAnalyzerConfig" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerConfig: accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.type">type</a></code> | <code>string</code> | The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_INTERNAL_ACCESS, ORGANIZATION_INTERNAL_ACCESS, ACCOUNT_UNUSED_ACCESS and ORGANIZATION_UNUSED_ACCESS. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerConfiguration">analyzerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a></code> | The configuration for the analyzer. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerName">analyzerName</a></code> | <code>string</code> | Analyzer name. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.archiveRules">archiveRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#archive_rules AccessanalyzerAnalyzer#archive_rules}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_INTERNAL_ACCESS, ORGANIZATION_INTERNAL_ACCESS, ACCOUNT_UNUSED_ACCESS and ORGANIZATION_UNUSED_ACCESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#type AccessanalyzerAnalyzer#type}

---

##### `analyzerConfiguration`<sup>Optional</sup> <a name="analyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerConfiguration"></a>

```typescript
public readonly analyzerConfiguration: AccessanalyzerAnalyzerAnalyzerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a>

The configuration for the analyzer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#analyzer_configuration AccessanalyzerAnalyzer#analyzer_configuration}

---

##### `analyzerName`<sup>Optional</sup> <a name="analyzerName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

Analyzer name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#analyzer_name AccessanalyzerAnalyzer#analyzer_name}

---

##### `archiveRules`<sup>Optional</sup> <a name="archiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.archiveRules"></a>

```typescript
public readonly archiveRules: IResolvable | AccessanalyzerAnalyzerArchiveRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#archive_rules AccessanalyzerAnalyzer#archive_rules}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AccessanalyzerAnalyzerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#tags AccessanalyzerAnalyzer#tags}

---

### AccessanalyzerAnalyzerTags <a name="AccessanalyzerAnalyzerTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const accessanalyzerAnalyzerTags: accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#key AccessanalyzerAnalyzer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/accessanalyzer_analyzer#value AccessanalyzerAnalyzer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get"></a>

```typescript
public get(index: number): AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>[]

---


### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetResourceArns"></a>

```typescript
public resetResourceArns(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArnsInput">resourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArnsInput"></a>

```typescript
public readonly resourceArnsInput: string[];
```

- *Type:* string[]

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>

---


### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.putInclusions">putInclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resetInclusions">resetInclusions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInclusions` <a name="putInclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.putInclusions"></a>

```typescript
public putInclusions(value: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.putInclusions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>[]

---

##### `resetInclusions` <a name="resetInclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resetInclusions"></a>

```typescript
public resetInclusions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusions">inclusions</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusionsInput">inclusionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inclusions`<sup>Required</sup> <a name="inclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusions"></a>

```typescript
public readonly inclusions: AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList</a>

---

##### `inclusionsInput`<sup>Optional</sup> <a name="inclusionsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusionsInput"></a>

```typescript
public readonly inclusionsInput: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a>

---


### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.putInternalAccessAnalysisRule">putInternalAccessAnalysisRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resetInternalAccessAnalysisRule">resetInternalAccessAnalysisRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalAccessAnalysisRule` <a name="putInternalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.putInternalAccessAnalysisRule"></a>

```typescript
public putInternalAccessAnalysisRule(value: AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.putInternalAccessAnalysisRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a>

---

##### `resetInternalAccessAnalysisRule` <a name="resetInternalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resetInternalAccessAnalysisRule"></a>

```typescript
public resetInternalAccessAnalysisRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRule">internalAccessAnalysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRuleInput">internalAccessAnalysisRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalAccessAnalysisRule`<sup>Required</sup> <a name="internalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRule"></a>

```typescript
public readonly internalAccessAnalysisRule: AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference</a>

---

##### `internalAccessAnalysisRuleInput`<sup>Optional</sup> <a name="internalAccessAnalysisRuleInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRuleInput"></a>

```typescript
public readonly internalAccessAnalysisRuleInput: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a>

---


### AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putInternalAccessConfiguration">putInternalAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putUnusedAccessConfiguration">putUnusedAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resetInternalAccessConfiguration">resetInternalAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resetUnusedAccessConfiguration">resetUnusedAccessConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalAccessConfiguration` <a name="putInternalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putInternalAccessConfiguration"></a>

```typescript
public putInternalAccessConfiguration(value: AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putInternalAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a>

---

##### `putUnusedAccessConfiguration` <a name="putUnusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putUnusedAccessConfiguration"></a>

```typescript
public putUnusedAccessConfiguration(value: AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putUnusedAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a>

---

##### `resetInternalAccessConfiguration` <a name="resetInternalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resetInternalAccessConfiguration"></a>

```typescript
public resetInternalAccessConfiguration(): void
```

##### `resetUnusedAccessConfiguration` <a name="resetUnusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resetUnusedAccessConfiguration"></a>

```typescript
public resetUnusedAccessConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfiguration">internalAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfiguration">unusedAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfigurationInput">internalAccessConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfigurationInput">unusedAccessConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a> \| cdktn.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalAccessConfiguration`<sup>Required</sup> <a name="internalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfiguration"></a>

```typescript
public readonly internalAccessConfiguration: AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference</a>

---

##### `unusedAccessConfiguration`<sup>Required</sup> <a name="unusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfiguration"></a>

```typescript
public readonly unusedAccessConfiguration: AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference</a>

---

##### `internalAccessConfigurationInput`<sup>Optional</sup> <a name="internalAccessConfigurationInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfigurationInput"></a>

```typescript
public readonly internalAccessConfigurationInput: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a>

---

##### `unusedAccessConfigurationInput`<sup>Optional</sup> <a name="unusedAccessConfigurationInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfigurationInput"></a>

```typescript
public readonly unusedAccessConfigurationInput: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessanalyzerAnalyzerAnalyzerConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a> | cdktn.IResolvable

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get"></a>

```typescript
public get(index: number): AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>[]

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.putResourceTags"></a>

```typescript
public putResourceTags(value: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>[]

---

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTags"></a>

```typescript
public readonly resourceTags: AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList</a>

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>[]

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get"></a>

```typescript
public get(index: number): AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>[]

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.putExclusions">putExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusions` <a name="putExclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.putExclusions"></a>

```typescript
public putExclusions(value: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.putExclusions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>[]

---

##### `resetExclusions` <a name="resetExclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resetExclusions"></a>

```typescript
public resetExclusions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList</a>

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a>

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.putAnalysisRule">putAnalysisRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resetAnalysisRule">resetAnalysisRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resetUnusedAccessAge">resetUnusedAccessAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalysisRule` <a name="putAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.putAnalysisRule"></a>

```typescript
public putAnalysisRule(value: AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.putAnalysisRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a>

---

##### `resetAnalysisRule` <a name="resetAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resetAnalysisRule"></a>

```typescript
public resetAnalysisRule(): void
```

##### `resetUnusedAccessAge` <a name="resetUnusedAccessAge" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resetUnusedAccessAge"></a>

```typescript
public resetUnusedAccessAge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRule">analysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRuleInput">analysisRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAgeInput">unusedAccessAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAge">unusedAccessAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysisRule`<sup>Required</sup> <a name="analysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRule"></a>

```typescript
public readonly analysisRule: AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference</a>

---

##### `analysisRuleInput`<sup>Optional</sup> <a name="analysisRuleInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRuleInput"></a>

```typescript
public readonly analysisRuleInput: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a>

---

##### `unusedAccessAgeInput`<sup>Optional</sup> <a name="unusedAccessAgeInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAgeInput"></a>

```typescript
public readonly unusedAccessAgeInput: number;
```

- *Type:* number

---

##### `unusedAccessAge`<sup>Required</sup> <a name="unusedAccessAge" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAge"></a>

```typescript
public readonly unusedAccessAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a>

---


### AccessanalyzerAnalyzerArchiveRulesFilterList <a name="AccessanalyzerAnalyzerArchiveRulesFilterList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.get"></a>

```typescript
public get(index: number): AccessanalyzerAnalyzerArchiveRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerArchiveRulesFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a>[]

---


### AccessanalyzerAnalyzerArchiveRulesFilterOutputReference <a name="AccessanalyzerAnalyzerArchiveRulesFilterOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetEq">resetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetExists">resetExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetNeq">resetNeq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetProperty">resetProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetContains"></a>

```typescript
public resetContains(): void
```

##### `resetEq` <a name="resetEq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetEq"></a>

```typescript
public resetEq(): void
```

##### `resetExists` <a name="resetExists" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetExists"></a>

```typescript
public resetExists(): void
```

##### `resetNeq` <a name="resetNeq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetNeq"></a>

```typescript
public resetNeq(): void
```

##### `resetProperty` <a name="resetProperty" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetProperty"></a>

```typescript
public resetProperty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.containsInput">containsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eqInput">eqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.existsInput">existsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neqInput">neqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.propertyInput">propertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.contains">contains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eq">eq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.exists">exists</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neq">neq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.containsInput"></a>

```typescript
public readonly containsInput: string[];
```

- *Type:* string[]

---

##### `eqInput`<sup>Optional</sup> <a name="eqInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eqInput"></a>

```typescript
public readonly eqInput: string[];
```

- *Type:* string[]

---

##### `existsInput`<sup>Optional</sup> <a name="existsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.existsInput"></a>

```typescript
public readonly existsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `neqInput`<sup>Optional</sup> <a name="neqInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neqInput"></a>

```typescript
public readonly neqInput: string[];
```

- *Type:* string[]

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.contains"></a>

```typescript
public readonly contains: string[];
```

- *Type:* string[]

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eq"></a>

```typescript
public readonly eq: string[];
```

- *Type:* string[]

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.exists"></a>

```typescript
public readonly exists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neq"></a>

```typescript
public readonly neq: string[];
```

- *Type:* string[]

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerArchiveRulesFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a>

---


### AccessanalyzerAnalyzerArchiveRulesList <a name="AccessanalyzerAnalyzerArchiveRulesList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.get"></a>

```typescript
public get(index: number): AccessanalyzerAnalyzerArchiveRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerArchiveRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a>[]

---


### AccessanalyzerAnalyzerArchiveRulesOutputReference <a name="AccessanalyzerAnalyzerArchiveRulesOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | AccessanalyzerAnalyzerArchiveRulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList">AccessanalyzerAnalyzerArchiveRulesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a> \| cdktn.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.filter"></a>

```typescript
public readonly filter: AccessanalyzerAnalyzerArchiveRulesFilterList;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList">AccessanalyzerAnalyzerArchiveRulesFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | AccessanalyzerAnalyzerArchiveRulesFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter">AccessanalyzerAnalyzerArchiveRulesFilter</a>[]

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessanalyzerAnalyzerArchiveRules | IResolvable;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules">AccessanalyzerAnalyzerArchiveRules</a> | cdktn.IResolvable

---


### AccessanalyzerAnalyzerTagsList <a name="AccessanalyzerAnalyzerTagsList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.get"></a>

```typescript
public get(index: number): AccessanalyzerAnalyzerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a>[]

---


### AccessanalyzerAnalyzerTagsOutputReference <a name="AccessanalyzerAnalyzerTagsOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerAnalyzerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags">AccessanalyzerAnalyzerTags</a>

---



