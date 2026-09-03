# `chimeAppInstanceBot` Submodule <a name="`chimeAppInstanceBot` Submodule" id="@cdktn/provider-awscc.chimeAppInstanceBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeAppInstanceBot <a name="ChimeAppInstanceBot" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot awscc_chime_app_instance_bot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

new chimeAppInstanceBot.ChimeAppInstanceBot(scope: Construct, id: string, config: ChimeAppInstanceBotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig">ChimeAppInstanceBotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig">ChimeAppInstanceBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration"></a>

```typescript
public putConfiguration(value: ChimeAppInstanceBotConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags"></a>

```typescript
public putTags(value: IResolvable | ChimeAppInstanceBotTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]

---

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeAppInstanceBot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChimeAppInstanceBot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeAppInstanceBot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeAppInstanceBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeAppInstanceBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceBotArn">appInstanceBotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference">ChimeAppInstanceBotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList">ChimeAppInstanceBotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArnInput">appInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appInstanceBotArn`<sup>Required</sup> <a name="appInstanceBotArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceBotArn"></a>

```typescript
public readonly appInstanceBotArn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configuration"></a>

```typescript
public readonly configuration: ChimeAppInstanceBotConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference">ChimeAppInstanceBotConfigurationOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tags"></a>

```typescript
public readonly tags: ChimeAppInstanceBotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList">ChimeAppInstanceBotTagsList</a>

---

##### `appInstanceArnInput`<sup>Optional</sup> <a name="appInstanceArnInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArnInput"></a>

```typescript
public readonly appInstanceArnInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | ChimeAppInstanceBotConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChimeAppInstanceBotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeAppInstanceBotConfig <a name="ChimeAppInstanceBotConfig" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

const chimeAppInstanceBotConfig: chimeAppInstanceBot.ChimeAppInstanceBotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | The ARN of the AppInstance. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | A structure that contains configuration data. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.metadata">metadata</a></code> | <code>string</code> | The metadata of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.name">name</a></code> | <code>string</code> | The name of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]</code> | The tags assigned to the AppInstanceBot. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

The ARN of the AppInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#app_instance_arn ChimeAppInstanceBot#app_instance_arn}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.configuration"></a>

```typescript
public readonly configuration: ChimeAppInstanceBotConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

A structure that contains configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#configuration ChimeAppInstanceBot#configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

The metadata of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#metadata ChimeAppInstanceBot#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#name ChimeAppInstanceBot#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChimeAppInstanceBotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]

The tags assigned to the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#tags ChimeAppInstanceBot#tags}

---

### ChimeAppInstanceBotConfiguration <a name="ChimeAppInstanceBotConfiguration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

const chimeAppInstanceBotConfiguration: chimeAppInstanceBot.ChimeAppInstanceBotConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | The configuration for an Amazon Lex V2 bot. |

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.property.lex"></a>

```typescript
public readonly lex: ChimeAppInstanceBotConfigurationLex;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

The configuration for an Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#lex ChimeAppInstanceBot#lex}

---

### ChimeAppInstanceBotConfigurationLex <a name="ChimeAppInstanceBotConfigurationLex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

const chimeAppInstanceBotConfigurationLex: chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.lexBotAliasArn">lexBotAliasArn</a></code> | <code>string</code> | The ARN of the Amazon Lex V2 bot's alias. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.localeId">localeId</a></code> | <code>string</code> | Identifies the Amazon Lex V2 bot's language and locale. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.invokedBy">invokedBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | Specifies the type of message that triggers a bot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.respondsTo">respondsTo</a></code> | <code>string</code> | Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.welcomeIntent">welcomeIntent</a></code> | <code>string</code> | The name of the welcome intent configured in the Amazon Lex V2 bot. |

---

##### `lexBotAliasArn`<sup>Required</sup> <a name="lexBotAliasArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.lexBotAliasArn"></a>

```typescript
public readonly lexBotAliasArn: string;
```

- *Type:* string

The ARN of the Amazon Lex V2 bot's alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#lex_bot_alias_arn ChimeAppInstanceBot#lex_bot_alias_arn}

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

Identifies the Amazon Lex V2 bot's language and locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#locale_id ChimeAppInstanceBot#locale_id}

---

##### `invokedBy`<sup>Optional</sup> <a name="invokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.invokedBy"></a>

```typescript
public readonly invokedBy: ChimeAppInstanceBotConfigurationLexInvokedBy;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

Specifies the type of message that triggers a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#invoked_by ChimeAppInstanceBot#invoked_by}

---

##### `respondsTo`<sup>Optional</sup> <a name="respondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.respondsTo"></a>

```typescript
public readonly respondsTo: string;
```

- *Type:* string

Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#responds_to ChimeAppInstanceBot#responds_to}

---

##### `welcomeIntent`<sup>Optional</sup> <a name="welcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.welcomeIntent"></a>

```typescript
public readonly welcomeIntent: string;
```

- *Type:* string

The name of the welcome intent configured in the Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#welcome_intent ChimeAppInstanceBot#welcome_intent}

---

### ChimeAppInstanceBotConfigurationLexInvokedBy <a name="ChimeAppInstanceBotConfigurationLexInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

const chimeAppInstanceBotConfigurationLexInvokedBy: chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.standardMessages">standardMessages</a></code> | <code>string</code> | Sets standard messages as the bot trigger. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.targetedMessages">targetedMessages</a></code> | <code>string</code> | Sets targeted messages as the bot trigger. |

---

##### `standardMessages`<sup>Optional</sup> <a name="standardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.standardMessages"></a>

```typescript
public readonly standardMessages: string;
```

- *Type:* string

Sets standard messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#standard_messages ChimeAppInstanceBot#standard_messages}

---

##### `targetedMessages`<sup>Optional</sup> <a name="targetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.targetedMessages"></a>

```typescript
public readonly targetedMessages: string;
```

- *Type:* string

Sets targeted messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#targeted_messages ChimeAppInstanceBot#targeted_messages}

---

### ChimeAppInstanceBotTags <a name="ChimeAppInstanceBotTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

const chimeAppInstanceBotTags: chimeAppInstanceBot.ChimeAppInstanceBotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.key">key</a></code> | <code>string</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.value">value</a></code> | <code>string</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#key ChimeAppInstanceBot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_app_instance_bot#value ChimeAppInstanceBot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeAppInstanceBotConfigurationLexInvokedByOutputReference <a name="ChimeAppInstanceBotConfigurationLexInvokedByOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

new chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetStandardMessages">resetStandardMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetTargetedMessages">resetTargetedMessages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStandardMessages` <a name="resetStandardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetStandardMessages"></a>

```typescript
public resetStandardMessages(): void
```

##### `resetTargetedMessages` <a name="resetTargetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetTargetedMessages"></a>

```typescript
public resetTargetedMessages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessagesInput">standardMessagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessagesInput">targetedMessagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages">standardMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages">targetedMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standardMessagesInput`<sup>Optional</sup> <a name="standardMessagesInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessagesInput"></a>

```typescript
public readonly standardMessagesInput: string;
```

- *Type:* string

---

##### `targetedMessagesInput`<sup>Optional</sup> <a name="targetedMessagesInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessagesInput"></a>

```typescript
public readonly targetedMessagesInput: string;
```

- *Type:* string

---

##### `standardMessages`<sup>Required</sup> <a name="standardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages"></a>

```typescript
public readonly standardMessages: string;
```

- *Type:* string

---

##### `targetedMessages`<sup>Required</sup> <a name="targetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages"></a>

```typescript
public readonly targetedMessages: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeAppInstanceBotConfigurationLexInvokedBy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---


### ChimeAppInstanceBotConfigurationLexOutputReference <a name="ChimeAppInstanceBotConfigurationLexOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

new chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy">putInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetInvokedBy">resetInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetRespondsTo">resetRespondsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetWelcomeIntent">resetWelcomeIntent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvokedBy` <a name="putInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy"></a>

```typescript
public putInvokedBy(value: ChimeAppInstanceBotConfigurationLexInvokedBy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---

##### `resetInvokedBy` <a name="resetInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetInvokedBy"></a>

```typescript
public resetInvokedBy(): void
```

##### `resetRespondsTo` <a name="resetRespondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetRespondsTo"></a>

```typescript
public resetRespondsTo(): void
```

##### `resetWelcomeIntent` <a name="resetWelcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetWelcomeIntent"></a>

```typescript
public resetWelcomeIntent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy">invokedBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference">ChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedByInput">invokedByInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArnInput">lexBotAliasArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeIdInput">localeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsToInput">respondsToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntentInput">welcomeIntentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn">lexBotAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeId">localeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo">respondsTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent">welcomeIntent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invokedBy`<sup>Required</sup> <a name="invokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy"></a>

```typescript
public readonly invokedBy: ChimeAppInstanceBotConfigurationLexInvokedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference">ChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a>

---

##### `invokedByInput`<sup>Optional</sup> <a name="invokedByInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedByInput"></a>

```typescript
public readonly invokedByInput: IResolvable | ChimeAppInstanceBotConfigurationLexInvokedBy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---

##### `lexBotAliasArnInput`<sup>Optional</sup> <a name="lexBotAliasArnInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArnInput"></a>

```typescript
public readonly lexBotAliasArnInput: string;
```

- *Type:* string

---

##### `localeIdInput`<sup>Optional</sup> <a name="localeIdInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeIdInput"></a>

```typescript
public readonly localeIdInput: string;
```

- *Type:* string

---

##### `respondsToInput`<sup>Optional</sup> <a name="respondsToInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsToInput"></a>

```typescript
public readonly respondsToInput: string;
```

- *Type:* string

---

##### `welcomeIntentInput`<sup>Optional</sup> <a name="welcomeIntentInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntentInput"></a>

```typescript
public readonly welcomeIntentInput: string;
```

- *Type:* string

---

##### `lexBotAliasArn`<sup>Required</sup> <a name="lexBotAliasArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn"></a>

```typescript
public readonly lexBotAliasArn: string;
```

- *Type:* string

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

---

##### `respondsTo`<sup>Required</sup> <a name="respondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo"></a>

```typescript
public readonly respondsTo: string;
```

- *Type:* string

---

##### `welcomeIntent`<sup>Required</sup> <a name="welcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent"></a>

```typescript
public readonly welcomeIntent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeAppInstanceBotConfigurationLex;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---


### ChimeAppInstanceBotConfigurationOutputReference <a name="ChimeAppInstanceBotConfigurationOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

new chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex">putLex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLex` <a name="putLex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex"></a>

```typescript
public putLex(value: ChimeAppInstanceBotConfigurationLex): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference">ChimeAppInstanceBotConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lexInput">lexInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lex"></a>

```typescript
public readonly lex: ChimeAppInstanceBotConfigurationLexOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference">ChimeAppInstanceBotConfigurationLexOutputReference</a>

---

##### `lexInput`<sup>Optional</sup> <a name="lexInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lexInput"></a>

```typescript
public readonly lexInput: IResolvable | ChimeAppInstanceBotConfigurationLex;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeAppInstanceBotConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---


### ChimeAppInstanceBotTagsList <a name="ChimeAppInstanceBotTagsList" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

new chimeAppInstanceBot.ChimeAppInstanceBotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get"></a>

```typescript
public get(index: number): ChimeAppInstanceBotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeAppInstanceBotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]

---


### ChimeAppInstanceBotTagsOutputReference <a name="ChimeAppInstanceBotTagsOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer"></a>

```typescript
import { chimeAppInstanceBot } from '@cdktn/provider-awscc'

new chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeAppInstanceBotTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>

---



