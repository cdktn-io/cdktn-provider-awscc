# `quicksightAgent` Submodule <a name="`quicksightAgent` Submodule" id="@cdktn/provider-awscc.quicksightAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAgent <a name="QuicksightAgent" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent awscc_quicksight_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

new quicksightAgent.QuicksightAgent(scope: Construct, id: string, config: QuicksightAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig">QuicksightAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig">QuicksightAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput">putCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetActionConnectors">resetActionConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetAgentLifecycle">resetAgentLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetCustomPromptInput">resetCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetIconId">resetIconId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetSpaces">resetSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetStarterPrompts">resetStarterPrompts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetWelcomeMessage">resetWelcomeMessage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomPromptInput` <a name="putCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput"></a>

```typescript
public putCustomPromptInput(value: QuicksightAgentCustomPromptInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags"></a>

```typescript
public putTags(value: IResolvable | QuicksightAgentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>[]

---

##### `resetActionConnectors` <a name="resetActionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetActionConnectors"></a>

```typescript
public resetActionConnectors(): void
```

##### `resetAgentLifecycle` <a name="resetAgentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetAgentLifecycle"></a>

```typescript
public resetAgentLifecycle(): void
```

##### `resetCustomPromptInput` <a name="resetCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetCustomPromptInput"></a>

```typescript
public resetCustomPromptInput(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIconId` <a name="resetIconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetIconId"></a>

```typescript
public resetIconId(): void
```

##### `resetSpaces` <a name="resetSpaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetSpaces"></a>

```typescript
public resetSpaces(): void
```

##### `resetStarterPrompts` <a name="resetStarterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetStarterPrompts"></a>

```typescript
public resetStarterPrompts(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWelcomeMessage` <a name="resetWelcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetWelcomeMessage"></a>

```typescript
public resetWelcomeMessage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

quicksightAgent.QuicksightAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

quicksightAgent.QuicksightAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

quicksightAgent.QuicksightAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

quicksightAgent.QuicksightAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuicksightAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInput">customPromptInput</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference">QuicksightAgentCustomPromptInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInterface">customPromptInterface</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference">QuicksightAgentCustomPromptInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList">QuicksightAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectorsInput">actionConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycleInput">agentLifecycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInputInput">customPromptInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconIdInput">iconIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spacesInput">spacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPromptsInput">starterPromptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessageInput">welcomeMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectors">actionConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycle">agentLifecycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconId">iconId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spaces">spaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPrompts">starterPrompts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessage">welcomeMessage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `customPromptInput`<sup>Required</sup> <a name="customPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInput"></a>

```typescript
public readonly customPromptInput: QuicksightAgentCustomPromptInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference">QuicksightAgentCustomPromptInputOutputReference</a>

---

##### `customPromptInterface`<sup>Required</sup> <a name="customPromptInterface" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInterface"></a>

```typescript
public readonly customPromptInterface: QuicksightAgentCustomPromptInterfaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference">QuicksightAgentCustomPromptInterfaceOutputReference</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tags"></a>

```typescript
public readonly tags: QuicksightAgentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList">QuicksightAgentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `actionConnectorsInput`<sup>Optional</sup> <a name="actionConnectorsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectorsInput"></a>

```typescript
public readonly actionConnectorsInput: string[];
```

- *Type:* string[]

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `agentLifecycleInput`<sup>Optional</sup> <a name="agentLifecycleInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycleInput"></a>

```typescript
public readonly agentLifecycleInput: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `customPromptInputInput`<sup>Optional</sup> <a name="customPromptInputInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInputInput"></a>

```typescript
public readonly customPromptInputInput: IResolvable | QuicksightAgentCustomPromptInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `iconIdInput`<sup>Optional</sup> <a name="iconIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconIdInput"></a>

```typescript
public readonly iconIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `spacesInput`<sup>Optional</sup> <a name="spacesInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spacesInput"></a>

```typescript
public readonly spacesInput: string[];
```

- *Type:* string[]

---

##### `starterPromptsInput`<sup>Optional</sup> <a name="starterPromptsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPromptsInput"></a>

```typescript
public readonly starterPromptsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QuicksightAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>[]

---

##### `welcomeMessageInput`<sup>Optional</sup> <a name="welcomeMessageInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessageInput"></a>

```typescript
public readonly welcomeMessageInput: string;
```

- *Type:* string

---

##### `actionConnectors`<sup>Required</sup> <a name="actionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectors"></a>

```typescript
public readonly actionConnectors: string[];
```

- *Type:* string[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `agentLifecycle`<sup>Required</sup> <a name="agentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycle"></a>

```typescript
public readonly agentLifecycle: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `iconId`<sup>Required</sup> <a name="iconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconId"></a>

```typescript
public readonly iconId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `spaces`<sup>Required</sup> <a name="spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spaces"></a>

```typescript
public readonly spaces: string[];
```

- *Type:* string[]

---

##### `starterPrompts`<sup>Required</sup> <a name="starterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPrompts"></a>

```typescript
public readonly starterPrompts: string[];
```

- *Type:* string[]

---

##### `welcomeMessage`<sup>Required</sup> <a name="welcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessage"></a>

```typescript
public readonly welcomeMessage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAgentConfig <a name="QuicksightAgentConfig" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

const quicksightAgentConfig: quicksightAgent.QuicksightAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentId">agentId</a></code> | <code>string</code> | The unique identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | The ID of the Amazon Web Services account where the agent is being created. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.name">name</a></code> | <code>string</code> | The display name of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.actionConnectors">actionConnectors</a></code> | <code>string[]</code> | A list of ActionConnector ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentLifecycle">agentLifecycle</a></code> | <code>string</code> | The lifecycle stage of the agent. PREVIEW or PUBLISHED. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.customPromptInput">customPromptInput</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | Custom prompt configuration. Specify either ExistingPrompt or NewPrompt. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.description">description</a></code> | <code>string</code> | A description of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.iconId">iconId</a></code> | <code>string</code> | The icon identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.spaces">spaces</a></code> | <code>string[]</code> | A list of Space ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.starterPrompts">starterPrompts</a></code> | <code>string[]</code> | A list of up to 3 starter prompts displayed to users. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>[]</code> | A list of key-value pairs to associate with the agent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.welcomeMessage">welcomeMessage</a></code> | <code>string</code> | The welcome message displayed when a user opens the agent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The unique identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#agent_id QuicksightAgent#agent_id}

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

The ID of the Amazon Web Services account where the agent is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#aws_account_id QuicksightAgent#aws_account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#name QuicksightAgent#name}

---

##### `actionConnectors`<sup>Optional</sup> <a name="actionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.actionConnectors"></a>

```typescript
public readonly actionConnectors: string[];
```

- *Type:* string[]

A list of ActionConnector ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#action_connectors QuicksightAgent#action_connectors}

---

##### `agentLifecycle`<sup>Optional</sup> <a name="agentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentLifecycle"></a>

```typescript
public readonly agentLifecycle: string;
```

- *Type:* string

The lifecycle stage of the agent. PREVIEW or PUBLISHED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#agent_lifecycle QuicksightAgent#agent_lifecycle}

---

##### `customPromptInput`<sup>Optional</sup> <a name="customPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.customPromptInput"></a>

```typescript
public readonly customPromptInput: QuicksightAgentCustomPromptInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

Custom prompt configuration. Specify either ExistingPrompt or NewPrompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#custom_prompt_input QuicksightAgent#custom_prompt_input}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#description QuicksightAgent#description}

---

##### `iconId`<sup>Optional</sup> <a name="iconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.iconId"></a>

```typescript
public readonly iconId: string;
```

- *Type:* string

The icon identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#icon_id QuicksightAgent#icon_id}

---

##### `spaces`<sup>Optional</sup> <a name="spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.spaces"></a>

```typescript
public readonly spaces: string[];
```

- *Type:* string[]

A list of Space ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#spaces QuicksightAgent#spaces}

---

##### `starterPrompts`<sup>Optional</sup> <a name="starterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.starterPrompts"></a>

```typescript
public readonly starterPrompts: string[];
```

- *Type:* string[]

A list of up to 3 starter prompts displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#starter_prompts QuicksightAgent#starter_prompts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QuicksightAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>[]

A list of key-value pairs to associate with the agent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#tags QuicksightAgent#tags}

---

##### `welcomeMessage`<sup>Optional</sup> <a name="welcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.welcomeMessage"></a>

```typescript
public readonly welcomeMessage: string;
```

- *Type:* string

The welcome message displayed when a user opens the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#welcome_message QuicksightAgent#welcome_message}

---

### QuicksightAgentCustomPromptInput <a name="QuicksightAgentCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

const quicksightAgentCustomPromptInput: quicksightAgent.QuicksightAgentCustomPromptInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.existingPrompt">existingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | Reference to an existing custom prompt profile. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.newPrompt">newPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | Parameters for creating a new custom prompt configuration. |

---

##### `existingPrompt`<sup>Optional</sup> <a name="existingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.existingPrompt"></a>

```typescript
public readonly existingPrompt: QuicksightAgentCustomPromptInputExistingPrompt;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

Reference to an existing custom prompt profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#existing_prompt QuicksightAgent#existing_prompt}

---

##### `newPrompt`<sup>Optional</sup> <a name="newPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.newPrompt"></a>

```typescript
public readonly newPrompt: QuicksightAgentCustomPromptInputNewPrompt;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

Parameters for creating a new custom prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#new_prompt QuicksightAgent#new_prompt}

---

### QuicksightAgentCustomPromptInputExistingPrompt <a name="QuicksightAgentCustomPromptInputExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

const quicksightAgentCustomPromptInputExistingPrompt: quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.modelProfileId">modelProfileId</a></code> | <code>string</code> | The identifier of the model profile. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.qbsAwsAccountId">qbsAwsAccountId</a></code> | <code>string</code> | The QBS AWS account identifier. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The subscription identifier. |

---

##### `modelProfileId`<sup>Optional</sup> <a name="modelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.modelProfileId"></a>

```typescript
public readonly modelProfileId: string;
```

- *Type:* string

The identifier of the model profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#model_profile_id QuicksightAgent#model_profile_id}

---

##### `qbsAwsAccountId`<sup>Optional</sup> <a name="qbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.qbsAwsAccountId"></a>

```typescript
public readonly qbsAwsAccountId: string;
```

- *Type:* string

The QBS AWS account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#qbs_aws_account_id QuicksightAgent#qbs_aws_account_id}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The subscription identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#subscription_id QuicksightAgent#subscription_id}

---

### QuicksightAgentCustomPromptInputNewPrompt <a name="QuicksightAgentCustomPromptInputNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

const quicksightAgentCustomPromptInputNewPrompt: quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.customInstructions">customInstructions</a></code> | <code>string</code> | Custom instructions for the agent behavior. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.identity">identity</a></code> | <code>string</code> | The identity or persona of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.outputStyle">outputStyle</a></code> | <code>string</code> | The output style for the agent responses. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.responseLength">responseLength</a></code> | <code>string</code> | The desired response length for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.tone">tone</a></code> | <code>string</code> | The tone used in agent responses. |

---

##### `customInstructions`<sup>Optional</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.customInstructions"></a>

```typescript
public readonly customInstructions: string;
```

- *Type:* string

Custom instructions for the agent behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#custom_instructions QuicksightAgent#custom_instructions}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

The identity or persona of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#identity QuicksightAgent#identity}

---

##### `outputStyle`<sup>Optional</sup> <a name="outputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.outputStyle"></a>

```typescript
public readonly outputStyle: string;
```

- *Type:* string

The output style for the agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#output_style QuicksightAgent#output_style}

---

##### `responseLength`<sup>Optional</sup> <a name="responseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.responseLength"></a>

```typescript
public readonly responseLength: string;
```

- *Type:* string

The desired response length for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#response_length QuicksightAgent#response_length}

---

##### `tone`<sup>Optional</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.tone"></a>

```typescript
public readonly tone: string;
```

- *Type:* string

The tone used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#tone QuicksightAgent#tone}

---

### QuicksightAgentCustomPromptInterface <a name="QuicksightAgentCustomPromptInterface" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

const quicksightAgentCustomPromptInterface: quicksightAgent.QuicksightAgentCustomPromptInterface = { ... }
```


### QuicksightAgentTags <a name="QuicksightAgentTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

const quicksightAgentTags: quicksightAgent.QuicksightAgentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#key QuicksightAgent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_agent#value QuicksightAgent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAgentCustomPromptInputExistingPromptOutputReference <a name="QuicksightAgentCustomPromptInputExistingPromptOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

new quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetModelProfileId">resetModelProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetQbsAwsAccountId">resetQbsAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModelProfileId` <a name="resetModelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetModelProfileId"></a>

```typescript
public resetModelProfileId(): void
```

##### `resetQbsAwsAccountId` <a name="resetQbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetQbsAwsAccountId"></a>

```typescript
public resetQbsAwsAccountId(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileIdInput">modelProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountIdInput">qbsAwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId">modelProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId">qbsAwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelProfileIdInput`<sup>Optional</sup> <a name="modelProfileIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileIdInput"></a>

```typescript
public readonly modelProfileIdInput: string;
```

- *Type:* string

---

##### `qbsAwsAccountIdInput`<sup>Optional</sup> <a name="qbsAwsAccountIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountIdInput"></a>

```typescript
public readonly qbsAwsAccountIdInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `modelProfileId`<sup>Required</sup> <a name="modelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId"></a>

```typescript
public readonly modelProfileId: string;
```

- *Type:* string

---

##### `qbsAwsAccountId`<sup>Required</sup> <a name="qbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId"></a>

```typescript
public readonly qbsAwsAccountId: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAgentCustomPromptInputExistingPrompt;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---


### QuicksightAgentCustomPromptInputNewPromptOutputReference <a name="QuicksightAgentCustomPromptInputNewPromptOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

new quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetCustomInstructions">resetCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetOutputStyle">resetOutputStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetResponseLength">resetResponseLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetTone">resetTone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomInstructions` <a name="resetCustomInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetCustomInstructions"></a>

```typescript
public resetCustomInstructions(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetOutputStyle` <a name="resetOutputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetOutputStyle"></a>

```typescript
public resetOutputStyle(): void
```

##### `resetResponseLength` <a name="resetResponseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetResponseLength"></a>

```typescript
public resetResponseLength(): void
```

##### `resetTone` <a name="resetTone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetTone"></a>

```typescript
public resetTone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructionsInput">customInstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identityInput">identityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyleInput">outputStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLengthInput">responseLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.toneInput">toneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions">customInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle">outputStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength">responseLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone">tone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customInstructionsInput`<sup>Optional</sup> <a name="customInstructionsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructionsInput"></a>

```typescript
public readonly customInstructionsInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identityInput"></a>

```typescript
public readonly identityInput: string;
```

- *Type:* string

---

##### `outputStyleInput`<sup>Optional</sup> <a name="outputStyleInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyleInput"></a>

```typescript
public readonly outputStyleInput: string;
```

- *Type:* string

---

##### `responseLengthInput`<sup>Optional</sup> <a name="responseLengthInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLengthInput"></a>

```typescript
public readonly responseLengthInput: string;
```

- *Type:* string

---

##### `toneInput`<sup>Optional</sup> <a name="toneInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.toneInput"></a>

```typescript
public readonly toneInput: string;
```

- *Type:* string

---

##### `customInstructions`<sup>Required</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions"></a>

```typescript
public readonly customInstructions: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `outputStyle`<sup>Required</sup> <a name="outputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle"></a>

```typescript
public readonly outputStyle: string;
```

- *Type:* string

---

##### `responseLength`<sup>Required</sup> <a name="responseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength"></a>

```typescript
public readonly responseLength: string;
```

- *Type:* string

---

##### `tone`<sup>Required</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone"></a>

```typescript
public readonly tone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAgentCustomPromptInputNewPrompt;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---


### QuicksightAgentCustomPromptInputOutputReference <a name="QuicksightAgentCustomPromptInputOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

new quicksightAgent.QuicksightAgentCustomPromptInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt">putExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt">putNewPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetExistingPrompt">resetExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetNewPrompt">resetNewPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExistingPrompt` <a name="putExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt"></a>

```typescript
public putExistingPrompt(value: QuicksightAgentCustomPromptInputExistingPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---

##### `putNewPrompt` <a name="putNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt"></a>

```typescript
public putNewPrompt(value: QuicksightAgentCustomPromptInputNewPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---

##### `resetExistingPrompt` <a name="resetExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetExistingPrompt"></a>

```typescript
public resetExistingPrompt(): void
```

##### `resetNewPrompt` <a name="resetNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetNewPrompt"></a>

```typescript
public resetNewPrompt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPrompt">existingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference">QuicksightAgentCustomPromptInputExistingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPrompt">newPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference">QuicksightAgentCustomPromptInputNewPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPromptInput">existingPromptInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPromptInput">newPromptInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `existingPrompt`<sup>Required</sup> <a name="existingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPrompt"></a>

```typescript
public readonly existingPrompt: QuicksightAgentCustomPromptInputExistingPromptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference">QuicksightAgentCustomPromptInputExistingPromptOutputReference</a>

---

##### `newPrompt`<sup>Required</sup> <a name="newPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPrompt"></a>

```typescript
public readonly newPrompt: QuicksightAgentCustomPromptInputNewPromptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference">QuicksightAgentCustomPromptInputNewPromptOutputReference</a>

---

##### `existingPromptInput`<sup>Optional</sup> <a name="existingPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPromptInput"></a>

```typescript
public readonly existingPromptInput: IResolvable | QuicksightAgentCustomPromptInputExistingPrompt;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---

##### `newPromptInput`<sup>Optional</sup> <a name="newPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPromptInput"></a>

```typescript
public readonly newPromptInput: IResolvable | QuicksightAgentCustomPromptInputNewPrompt;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAgentCustomPromptInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---


### QuicksightAgentCustomPromptInterfaceOutputReference <a name="QuicksightAgentCustomPromptInterfaceOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

new quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions">customInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId">modelProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle">outputStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary">promptSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId">qbsAwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength">responseLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.tone">tone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface">QuicksightAgentCustomPromptInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customInstructions`<sup>Required</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions"></a>

```typescript
public readonly customInstructions: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `modelProfileId`<sup>Required</sup> <a name="modelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId"></a>

```typescript
public readonly modelProfileId: string;
```

- *Type:* string

---

##### `outputStyle`<sup>Required</sup> <a name="outputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle"></a>

```typescript
public readonly outputStyle: string;
```

- *Type:* string

---

##### `promptSummary`<sup>Required</sup> <a name="promptSummary" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary"></a>

```typescript
public readonly promptSummary: string;
```

- *Type:* string

---

##### `qbsAwsAccountId`<sup>Required</sup> <a name="qbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId"></a>

```typescript
public readonly qbsAwsAccountId: string;
```

- *Type:* string

---

##### `responseLength`<sup>Required</sup> <a name="responseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength"></a>

```typescript
public readonly responseLength: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tone`<sup>Required</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.tone"></a>

```typescript
public readonly tone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightAgentCustomPromptInterface;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface">QuicksightAgentCustomPromptInterface</a>

---


### QuicksightAgentTagsList <a name="QuicksightAgentTagsList" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

new quicksightAgent.QuicksightAgentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get"></a>

```typescript
public get(index: number): QuicksightAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>[]

---


### QuicksightAgentTagsOutputReference <a name="QuicksightAgentTagsOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer"></a>

```typescript
import { quicksightAgent } from '@cdktn/provider-awscc'

new quicksightAgent.QuicksightAgentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAgentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>

---



