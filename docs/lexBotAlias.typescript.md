# `lexBotAlias` Submodule <a name="`lexBotAlias` Submodule" id="@cdktn/provider-awscc.lexBotAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBotAlias <a name="LexBotAlias" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias awscc_lex_bot_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAlias(scope: Construct, id: string, config: LexBotAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig">LexBotAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig">LexBotAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings">putBotAliasLocaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags">putBotAliasTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings">putConversationLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings">putSentimentAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasLocaleSettings">resetBotAliasLocaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasTags">resetBotAliasTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotVersion">resetBotVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetConversationLogSettings">resetConversationLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetSentimentAnalysisSettings">resetSentimentAnalysisSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBotAliasLocaleSettings` <a name="putBotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings"></a>

```typescript
public putBotAliasLocaleSettings(value: IResolvable | LexBotAliasBotAliasLocaleSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>[]

---

##### `putBotAliasTags` <a name="putBotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags"></a>

```typescript
public putBotAliasTags(value: IResolvable | LexBotAliasBotAliasTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>[]

---

##### `putConversationLogSettings` <a name="putConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings"></a>

```typescript
public putConversationLogSettings(value: LexBotAliasConversationLogSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

---

##### `putSentimentAnalysisSettings` <a name="putSentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings"></a>

```typescript
public putSentimentAnalysisSettings(value: LexBotAliasSentimentAnalysisSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

---

##### `resetBotAliasLocaleSettings` <a name="resetBotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasLocaleSettings"></a>

```typescript
public resetBotAliasLocaleSettings(): void
```

##### `resetBotAliasTags` <a name="resetBotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasTags"></a>

```typescript
public resetBotAliasTags(): void
```

##### `resetBotVersion` <a name="resetBotVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotVersion"></a>

```typescript
public resetBotVersion(): void
```

##### `resetConversationLogSettings` <a name="resetConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetConversationLogSettings"></a>

```typescript
public resetConversationLogSettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSentimentAnalysisSettings` <a name="resetSentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetSentimentAnalysisSettings"></a>

```typescript
public resetSentimentAnalysisSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LexBotAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

lexBotAlias.LexBotAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

lexBotAlias.LexBotAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

lexBotAlias.LexBotAlias.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

lexBotAlias.LexBotAlias.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LexBotAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LexBotAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LexBotAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LexBotAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasId">botAliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettings">botAliasLocaleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList">LexBotAliasBotAliasLocaleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasStatus">botAliasStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTags">botAliasTags</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList">LexBotAliasBotAliasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettings">conversationLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference">LexBotAliasConversationLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettings">sentimentAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference">LexBotAliasSentimentAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettingsInput">botAliasLocaleSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasNameInput">botAliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTagsInput">botAliasTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botIdInput">botIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersionInput">botVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettingsInput">conversationLogSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettingsInput">sentimentAnalysisSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasName">botAliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botId">botId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersion">botVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `botAliasId`<sup>Required</sup> <a name="botAliasId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasId"></a>

```typescript
public readonly botAliasId: string;
```

- *Type:* string

---

##### `botAliasLocaleSettings`<sup>Required</sup> <a name="botAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettings"></a>

```typescript
public readonly botAliasLocaleSettings: LexBotAliasBotAliasLocaleSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList">LexBotAliasBotAliasLocaleSettingsList</a>

---

##### `botAliasStatus`<sup>Required</sup> <a name="botAliasStatus" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasStatus"></a>

```typescript
public readonly botAliasStatus: string;
```

- *Type:* string

---

##### `botAliasTags`<sup>Required</sup> <a name="botAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTags"></a>

```typescript
public readonly botAliasTags: LexBotAliasBotAliasTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList">LexBotAliasBotAliasTagsList</a>

---

##### `conversationLogSettings`<sup>Required</sup> <a name="conversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettings"></a>

```typescript
public readonly conversationLogSettings: LexBotAliasConversationLogSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference">LexBotAliasConversationLogSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sentimentAnalysisSettings`<sup>Required</sup> <a name="sentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettings"></a>

```typescript
public readonly sentimentAnalysisSettings: LexBotAliasSentimentAnalysisSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference">LexBotAliasSentimentAnalysisSettingsOutputReference</a>

---

##### `botAliasLocaleSettingsInput`<sup>Optional</sup> <a name="botAliasLocaleSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettingsInput"></a>

```typescript
public readonly botAliasLocaleSettingsInput: IResolvable | LexBotAliasBotAliasLocaleSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>[]

---

##### `botAliasNameInput`<sup>Optional</sup> <a name="botAliasNameInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasNameInput"></a>

```typescript
public readonly botAliasNameInput: string;
```

- *Type:* string

---

##### `botAliasTagsInput`<sup>Optional</sup> <a name="botAliasTagsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTagsInput"></a>

```typescript
public readonly botAliasTagsInput: IResolvable | LexBotAliasBotAliasTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>[]

---

##### `botIdInput`<sup>Optional</sup> <a name="botIdInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botIdInput"></a>

```typescript
public readonly botIdInput: string;
```

- *Type:* string

---

##### `botVersionInput`<sup>Optional</sup> <a name="botVersionInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersionInput"></a>

```typescript
public readonly botVersionInput: string;
```

- *Type:* string

---

##### `conversationLogSettingsInput`<sup>Optional</sup> <a name="conversationLogSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettingsInput"></a>

```typescript
public readonly conversationLogSettingsInput: IResolvable | LexBotAliasConversationLogSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `sentimentAnalysisSettingsInput`<sup>Optional</sup> <a name="sentimentAnalysisSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettingsInput"></a>

```typescript
public readonly sentimentAnalysisSettingsInput: IResolvable | LexBotAliasSentimentAnalysisSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

---

##### `botAliasName`<sup>Required</sup> <a name="botAliasName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasName"></a>

```typescript
public readonly botAliasName: string;
```

- *Type:* string

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAliasBotAliasLocaleSettings <a name="LexBotAliasBotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasBotAliasLocaleSettings: lexBotAlias.LexBotAliasBotAliasLocaleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.botAliasLocaleSetting">botAliasLocaleSetting</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | You can use this parameter to specify a specific Lambda function to run different functions in different locales. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.localeId">localeId</a></code> | <code>string</code> | A string used to identify the locale. |

---

##### `botAliasLocaleSetting`<sup>Optional</sup> <a name="botAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.botAliasLocaleSetting"></a>

```typescript
public readonly botAliasLocaleSetting: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

You can use this parameter to specify a specific Lambda function to run different functions in different locales.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#bot_alias_locale_setting LexBotAlias#bot_alias_locale_setting}

---

##### `localeId`<sup>Optional</sup> <a name="localeId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

A string used to identify the locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#locale_id LexBotAlias#locale_id}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting: lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.codeHookSpecification">codeHookSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the Lambda code hook is enabled. |

---

##### `codeHookSpecification`<sup>Optional</sup> <a name="codeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.codeHookSpecification"></a>

```typescript
public readonly codeHookSpecification: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#code_hook_specification LexBotAlias#code_hook_specification}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the Lambda code hook is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification: lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.property.lambdaCodeHook">lambdaCodeHook</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |

---

##### `lambdaCodeHook`<sup>Optional</sup> <a name="lambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.property.lambdaCodeHook"></a>

```typescript
public readonly lambdaCodeHook: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#lambda_code_hook LexBotAlias#lambda_code_hook}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook: lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.codeHookInterfaceVersion">codeHookInterfaceVersion</a></code> | <code>string</code> | The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lambda function. |

---

##### `codeHookInterfaceVersion`<sup>Optional</sup> <a name="codeHookInterfaceVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.codeHookInterfaceVersion"></a>

```typescript
public readonly codeHookInterfaceVersion: string;
```

- *Type:* string

The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#code_hook_interface_version LexBotAlias#code_hook_interface_version}

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#lambda_arn LexBotAlias#lambda_arn}

---

### LexBotAliasBotAliasTags <a name="LexBotAliasBotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasBotAliasTags: lexBotAlias.LexBotAliasBotAliasTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.key">key</a></code> | <code>string</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.value">value</a></code> | <code>string</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#key LexBotAlias#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#value LexBotAlias#value}

---

### LexBotAliasConfig <a name="LexBotAliasConfig" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasConfig: lexBotAlias.LexBotAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasName">botAliasName</a></code> | <code>string</code> | A unique identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botId">botId</a></code> | <code>string</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasLocaleSettings">botAliasLocaleSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>[]</code> | A list of bot alias locale settings to add to the bot alias. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasTags">botAliasTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>[]</code> | A list of tags to add to the bot alias. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botVersion">botVersion</a></code> | <code>string</code> | The version of a bot. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.conversationLogSettings">conversationLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.description">description</a></code> | <code>string</code> | A description of the bot alias. Use the description to help identify the bot alias in lists. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.sentimentAnalysisSettings">sentimentAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a></code> | Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `botAliasName`<sup>Required</sup> <a name="botAliasName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasName"></a>

```typescript
public readonly botAliasName: string;
```

- *Type:* string

A unique identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#bot_alias_name LexBotAlias#bot_alias_name}

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#bot_id LexBotAlias#bot_id}

---

##### `botAliasLocaleSettings`<sup>Optional</sup> <a name="botAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasLocaleSettings"></a>

```typescript
public readonly botAliasLocaleSettings: IResolvable | LexBotAliasBotAliasLocaleSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>[]

A list of bot alias locale settings to add to the bot alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#bot_alias_locale_settings LexBotAlias#bot_alias_locale_settings}

---

##### `botAliasTags`<sup>Optional</sup> <a name="botAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasTags"></a>

```typescript
public readonly botAliasTags: IResolvable | LexBotAliasBotAliasTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>[]

A list of tags to add to the bot alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#bot_alias_tags LexBotAlias#bot_alias_tags}

---

##### `botVersion`<sup>Optional</sup> <a name="botVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

The version of a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#bot_version LexBotAlias#bot_version}

---

##### `conversationLogSettings`<sup>Optional</sup> <a name="conversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.conversationLogSettings"></a>

```typescript
public readonly conversationLogSettings: LexBotAliasConversationLogSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#conversation_log_settings LexBotAlias#conversation_log_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the bot alias. Use the description to help identify the bot alias in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#description LexBotAlias#description}

---

##### `sentimentAnalysisSettings`<sup>Optional</sup> <a name="sentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.sentimentAnalysisSettings"></a>

```typescript
public readonly sentimentAnalysisSettings: LexBotAliasSentimentAnalysisSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#sentiment_analysis_settings LexBotAlias#sentiment_analysis_settings}

---

### LexBotAliasConversationLogSettings <a name="LexBotAliasConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasConversationLogSettings: lexBotAlias.LexBotAliasConversationLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.audioLogSettings">audioLogSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>[]</code> | List of audio log settings. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.textLogSettings">textLogSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>[]</code> | List of text log settings. |

---

##### `audioLogSettings`<sup>Optional</sup> <a name="audioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.audioLogSettings"></a>

```typescript
public readonly audioLogSettings: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>[]

List of audio log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#audio_log_settings LexBotAlias#audio_log_settings}

---

##### `textLogSettings`<sup>Optional</sup> <a name="textLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.textLogSettings"></a>

```typescript
public readonly textLogSettings: IResolvable | LexBotAliasConversationLogSettingsTextLogSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>[]

List of text log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#text_log_settings LexBotAlias#text_log_settings}

---

### LexBotAliasConversationLogSettingsAudioLogSettings <a name="LexBotAliasConversationLogSettingsAudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasConversationLogSettingsAudioLogSettings: lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | The location of audio log files collected when conversation logging is enabled for a bot. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.destination"></a>

```typescript
public readonly destination: LexBotAliasConversationLogSettingsAudioLogSettingsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

The location of audio log files collected when conversation logging is enabled for a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}.

---

### LexBotAliasConversationLogSettingsAudioLogSettingsDestination <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasConversationLogSettingsAudioLogSettingsDestination: lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | Specifies an Amazon S3 bucket for logging audio conversations. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

Specifies an Amazon S3 bucket for logging audio conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#s3_bucket LexBotAlias#s3_bucket}

---

### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket: lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.logPrefix">logPrefix</a></code> | <code>string</code> | The Amazon S3 key of the deployment package. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}

---

##### `logPrefix`<sup>Optional</sup> <a name="logPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.logPrefix"></a>

```typescript
public readonly logPrefix: string;
```

- *Type:* string

The Amazon S3 key of the deployment package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}

---

##### `s3BucketArn`<sup>Optional</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#s3_bucket_arn LexBotAlias#s3_bucket_arn}

---

### LexBotAliasConversationLogSettingsTextLogSettings <a name="LexBotAliasConversationLogSettingsTextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasConversationLogSettingsTextLogSettings: lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | Defines the Amazon CloudWatch Logs destination log group for conversation text logs. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.destination"></a>

```typescript
public readonly destination: LexBotAliasConversationLogSettingsTextLogSettingsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

Defines the Amazon CloudWatch Logs destination log group for conversation text logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}.

---

### LexBotAliasConversationLogSettingsTextLogSettingsDestination <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasConversationLogSettingsTextLogSettingsDestination: lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#cloudwatch LexBotAlias#cloudwatch}. |

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#cloudwatch LexBotAlias#cloudwatch}.

---

### LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch: lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | A string used to identify the groupArn for the Cloudwatch Log Group. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.logPrefix">logPrefix</a></code> | <code>string</code> | A string containing the value for the Log Prefix. |

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

A string used to identify the groupArn for the Cloudwatch Log Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#cloudwatch_log_group_arn LexBotAlias#cloudwatch_log_group_arn}

---

##### `logPrefix`<sup>Optional</sup> <a name="logPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.logPrefix"></a>

```typescript
public readonly logPrefix: string;
```

- *Type:* string

A string containing the value for the Log Prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}

---

### LexBotAliasSentimentAnalysisSettings <a name="LexBotAliasSentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

const lexBotAliasSentimentAnalysisSettings: lexBotAlias.LexBotAliasSentimentAnalysisSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.property.detectSentiment">detectSentiment</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable to call Amazon Comprehend for Sentiment natively within Lex. |

---

##### `detectSentiment`<sup>Optional</sup> <a name="detectSentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.property.detectSentiment"></a>

```typescript
public readonly detectSentiment: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable to call Amazon Comprehend for Sentiment natively within Lex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lex_bot_alias#detect_sentiment LexBotAlias#detect_sentiment}

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetCodeHookInterfaceVersion">resetCodeHookInterfaceVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCodeHookInterfaceVersion` <a name="resetCodeHookInterfaceVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetCodeHookInterfaceVersion"></a>

```typescript
public resetCodeHookInterfaceVersion(): void
```

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetLambdaArn"></a>

```typescript
public resetLambdaArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersionInput">codeHookInterfaceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion">codeHookInterfaceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeHookInterfaceVersionInput`<sup>Optional</sup> <a name="codeHookInterfaceVersionInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersionInput"></a>

```typescript
public readonly codeHookInterfaceVersionInput: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `codeHookInterfaceVersion`<sup>Required</sup> <a name="codeHookInterfaceVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion"></a>

```typescript
public readonly codeHookInterfaceVersion: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---


### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook">putLambdaCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resetLambdaCodeHook">resetLambdaCodeHook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaCodeHook` <a name="putLambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook"></a>

```typescript
public putLambdaCodeHook(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---

##### `resetLambdaCodeHook` <a name="resetLambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resetLambdaCodeHook"></a>

```typescript
public resetLambdaCodeHook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook">lambdaCodeHook</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHookInput">lambdaCodeHookInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaCodeHook`<sup>Required</sup> <a name="lambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook"></a>

```typescript
public readonly lambdaCodeHook: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a>

---

##### `lambdaCodeHookInput`<sup>Optional</sup> <a name="lambdaCodeHookInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHookInput"></a>

```typescript
public readonly lambdaCodeHookInput: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---


### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification">putCodeHookSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetCodeHookSpecification">resetCodeHookSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeHookSpecification` <a name="putCodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification"></a>

```typescript
public putCodeHookSpecification(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---

##### `resetCodeHookSpecification` <a name="resetCodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetCodeHookSpecification"></a>

```typescript
public resetCodeHookSpecification(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification">codeHookSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecificationInput">codeHookSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeHookSpecification`<sup>Required</sup> <a name="codeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification"></a>

```typescript
public readonly codeHookSpecification: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a>

---

##### `codeHookSpecificationInput`<sup>Optional</sup> <a name="codeHookSpecificationInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecificationInput"></a>

```typescript
public readonly codeHookSpecificationInput: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---


### LexBotAliasBotAliasLocaleSettingsList <a name="LexBotAliasBotAliasLocaleSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasBotAliasLocaleSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get"></a>

```typescript
public get(index: number): LexBotAliasBotAliasLocaleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasBotAliasLocaleSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>[]

---


### LexBotAliasBotAliasLocaleSettingsOutputReference <a name="LexBotAliasBotAliasLocaleSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting">putBotAliasLocaleSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetBotAliasLocaleSetting">resetBotAliasLocaleSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetLocaleId">resetLocaleId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBotAliasLocaleSetting` <a name="putBotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting"></a>

```typescript
public putBotAliasLocaleSetting(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---

##### `resetBotAliasLocaleSetting` <a name="resetBotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetBotAliasLocaleSetting"></a>

```typescript
public resetBotAliasLocaleSetting(): void
```

##### `resetLocaleId` <a name="resetLocaleId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetLocaleId"></a>

```typescript
public resetLocaleId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting">botAliasLocaleSetting</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSettingInput">botAliasLocaleSettingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeIdInput">localeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId">localeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `botAliasLocaleSetting`<sup>Required</sup> <a name="botAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting"></a>

```typescript
public readonly botAliasLocaleSetting: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a>

---

##### `botAliasLocaleSettingInput`<sup>Optional</sup> <a name="botAliasLocaleSettingInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSettingInput"></a>

```typescript
public readonly botAliasLocaleSettingInput: IResolvable | LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---

##### `localeIdInput`<sup>Optional</sup> <a name="localeIdInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeIdInput"></a>

```typescript
public readonly localeIdInput: string;
```

- *Type:* string

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasBotAliasLocaleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings">LexBotAliasBotAliasLocaleSettings</a>

---


### LexBotAliasBotAliasTagsList <a name="LexBotAliasBotAliasTagsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasBotAliasTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get"></a>

```typescript
public get(index: number): LexBotAliasBotAliasTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasBotAliasTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>[]

---


### LexBotAliasBotAliasTagsOutputReference <a name="LexBotAliasBotAliasTagsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasBotAliasTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasBotAliasTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags">LexBotAliasBotAliasTags</a>

---


### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket">putS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Bucket` <a name="putS3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket"></a>

```typescript
public putS3Bucket(value: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a>

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettingsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---


### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetLogPrefix">resetLogPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetS3BucketArn">resetS3BucketArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetLogPrefix` <a name="resetLogPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetLogPrefix"></a>

```typescript
public resetLogPrefix(): void
```

##### `resetS3BucketArn` <a name="resetS3BucketArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetS3BucketArn"></a>

```typescript
public resetS3BucketArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefixInput">logPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArnInput">s3BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix">logPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `logPrefixInput`<sup>Optional</sup> <a name="logPrefixInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefixInput"></a>

```typescript
public readonly logPrefixInput: string;
```

- *Type:* string

---

##### `s3BucketArnInput`<sup>Optional</sup> <a name="s3BucketArnInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArnInput"></a>

```typescript
public readonly s3BucketArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `logPrefix`<sup>Required</sup> <a name="logPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix"></a>

```typescript
public readonly logPrefix: string;
```

- *Type:* string

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---


### LexBotAliasConversationLogSettingsAudioLogSettingsList <a name="LexBotAliasConversationLogSettingsAudioLogSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get"></a>

```typescript
public get(index: number): LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>[]

---


### LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination"></a>

```typescript
public putDestination(value: LexBotAliasConversationLogSettingsAudioLogSettingsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination"></a>

```typescript
public readonly destination: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettingsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>

---


### LexBotAliasConversationLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings">putAudioLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings">putTextLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetAudioLogSettings">resetAudioLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetTextLogSettings">resetTextLogSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioLogSettings` <a name="putAudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings"></a>

```typescript
public putAudioLogSettings(value: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>[]

---

##### `putTextLogSettings` <a name="putTextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings"></a>

```typescript
public putTextLogSettings(value: IResolvable | LexBotAliasConversationLogSettingsTextLogSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>[]

---

##### `resetAudioLogSettings` <a name="resetAudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetAudioLogSettings"></a>

```typescript
public resetAudioLogSettings(): void
```

##### `resetTextLogSettings` <a name="resetTextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetTextLogSettings"></a>

```typescript
public resetTextLogSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings">audioLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList">LexBotAliasConversationLogSettingsAudioLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettings">textLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList">LexBotAliasConversationLogSettingsTextLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettingsInput">audioLogSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettingsInput">textLogSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioLogSettings`<sup>Required</sup> <a name="audioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings"></a>

```typescript
public readonly audioLogSettings: LexBotAliasConversationLogSettingsAudioLogSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList">LexBotAliasConversationLogSettingsAudioLogSettingsList</a>

---

##### `textLogSettings`<sup>Required</sup> <a name="textLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettings"></a>

```typescript
public readonly textLogSettings: LexBotAliasConversationLogSettingsTextLogSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList">LexBotAliasConversationLogSettingsTextLogSettingsList</a>

---

##### `audioLogSettingsInput`<sup>Optional</sup> <a name="audioLogSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettingsInput"></a>

```typescript
public readonly audioLogSettingsInput: IResolvable | LexBotAliasConversationLogSettingsAudioLogSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings">LexBotAliasConversationLogSettingsAudioLogSettings</a>[]

---

##### `textLogSettingsInput`<sup>Optional</sup> <a name="textLogSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettingsInput"></a>

```typescript
public readonly textLogSettingsInput: IResolvable | LexBotAliasConversationLogSettingsTextLogSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

---


### LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetCloudwatchLogGroupArn">resetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetLogPrefix">resetLogPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogGroupArn` <a name="resetCloudwatchLogGroupArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetCloudwatchLogGroupArn"></a>

```typescript
public resetCloudwatchLogGroupArn(): void
```

##### `resetLogPrefix` <a name="resetLogPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetLogPrefix"></a>

```typescript
public resetLogPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefixInput">logPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix">logPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogGroupArnInput: string;
```

- *Type:* string

---

##### `logPrefixInput`<sup>Optional</sup> <a name="logPrefixInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefixInput"></a>

```typescript
public readonly logPrefixInput: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `logPrefix`<sup>Required</sup> <a name="logPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix"></a>

```typescript
public readonly logPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---


### LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch">putCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resetCloudwatch">resetCloudwatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatch` <a name="putCloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch"></a>

```typescript
public putCloudwatch(value: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---

##### `resetCloudwatch` <a name="resetCloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resetCloudwatch"></a>

```typescript
public resetCloudwatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatchInput">cloudwatchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a>

---

##### `cloudwatchInput`<sup>Optional</sup> <a name="cloudwatchInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatchInput"></a>

```typescript
public readonly cloudwatchInput: IResolvable | LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettingsTextLogSettingsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---


### LexBotAliasConversationLogSettingsTextLogSettingsList <a name="LexBotAliasConversationLogSettingsTextLogSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get"></a>

```typescript
public get(index: number): LexBotAliasConversationLogSettingsTextLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettingsTextLogSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>[]

---


### LexBotAliasConversationLogSettingsTextLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination"></a>

```typescript
public putDestination(value: LexBotAliasConversationLogSettingsTextLogSettingsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination"></a>

```typescript
public readonly destination: LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | LexBotAliasConversationLogSettingsTextLogSettingsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogSettingsTextLogSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings">LexBotAliasConversationLogSettingsTextLogSettings</a>

---


### LexBotAliasSentimentAnalysisSettingsOutputReference <a name="LexBotAliasSentimentAnalysisSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktn/provider-awscc'

new lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resetDetectSentiment">resetDetectSentiment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDetectSentiment` <a name="resetDetectSentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resetDetectSentiment"></a>

```typescript
public resetDetectSentiment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentimentInput">detectSentimentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment">detectSentiment</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detectSentimentInput`<sup>Optional</sup> <a name="detectSentimentInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentimentInput"></a>

```typescript
public readonly detectSentimentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectSentiment`<sup>Required</sup> <a name="detectSentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment"></a>

```typescript
public readonly detectSentiment: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasSentimentAnalysisSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

---



