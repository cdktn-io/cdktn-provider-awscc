# `wisdomAiAgentVersion` Submodule <a name="`wisdomAiAgentVersion` Submodule" id="@cdktn/provider-awscc.wisdomAiAgentVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiAgentVersion <a name="WisdomAiAgentVersion" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_agent_version awscc_wisdom_ai_agent_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.Initializer"></a>

```typescript
import { wisdomAiAgentVersion } from '@cdktn/provider-awscc'

new wisdomAiAgentVersion.WisdomAiAgentVersion(scope: Construct, id: string, config: WisdomAiAgentVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig">WisdomAiAgentVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig">WisdomAiAgentVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.resetModifiedTimeSeconds">resetModifiedTimeSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetModifiedTimeSeconds` <a name="resetModifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.resetModifiedTimeSeconds"></a>

```typescript
public resetModifiedTimeSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAiAgentVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isConstruct"></a>

```typescript
import { wisdomAiAgentVersion } from '@cdktn/provider-awscc'

wisdomAiAgentVersion.WisdomAiAgentVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isTerraformElement"></a>

```typescript
import { wisdomAiAgentVersion } from '@cdktn/provider-awscc'

wisdomAiAgentVersion.WisdomAiAgentVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isTerraformResource"></a>

```typescript
import { wisdomAiAgentVersion } from '@cdktn/provider-awscc'

wisdomAiAgentVersion.WisdomAiAgentVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.generateConfigForImport"></a>

```typescript
import { wisdomAiAgentVersion } from '@cdktn/provider-awscc'

wisdomAiAgentVersion.WisdomAiAgentVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WisdomAiAgentVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomAiAgentVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomAiAgentVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_agent_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiAgentVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.aiAgentArn">aiAgentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.aiAgentVersionId">aiAgentVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.assistantArn">assistantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.aiAgentIdInput">aiAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.assistantIdInput">assistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.modifiedTimeSecondsInput">modifiedTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.aiAgentId">aiAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.assistantId">assistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aiAgentArn`<sup>Required</sup> <a name="aiAgentArn" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.aiAgentArn"></a>

```typescript
public readonly aiAgentArn: string;
```

- *Type:* string

---

##### `aiAgentVersionId`<sup>Required</sup> <a name="aiAgentVersionId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.aiAgentVersionId"></a>

```typescript
public readonly aiAgentVersionId: string;
```

- *Type:* string

---

##### `assistantArn`<sup>Required</sup> <a name="assistantArn" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.assistantArn"></a>

```typescript
public readonly assistantArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `aiAgentIdInput`<sup>Optional</sup> <a name="aiAgentIdInput" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.aiAgentIdInput"></a>

```typescript
public readonly aiAgentIdInput: string;
```

- *Type:* string

---

##### `assistantIdInput`<sup>Optional</sup> <a name="assistantIdInput" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.assistantIdInput"></a>

```typescript
public readonly assistantIdInput: string;
```

- *Type:* string

---

##### `modifiedTimeSecondsInput`<sup>Optional</sup> <a name="modifiedTimeSecondsInput" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.modifiedTimeSecondsInput"></a>

```typescript
public readonly modifiedTimeSecondsInput: number;
```

- *Type:* number

---

##### `aiAgentId`<sup>Required</sup> <a name="aiAgentId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.aiAgentId"></a>

```typescript
public readonly aiAgentId: string;
```

- *Type:* string

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

---

##### `modifiedTimeSeconds`<sup>Required</sup> <a name="modifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.modifiedTimeSeconds"></a>

```typescript
public readonly modifiedTimeSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiAgentVersionConfig <a name="WisdomAiAgentVersionConfig" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.Initializer"></a>

```typescript
import { wisdomAiAgentVersion } from '@cdktn/provider-awscc'

const wisdomAiAgentVersionConfig: wisdomAiAgentVersion.WisdomAiAgentVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.aiAgentId">aiAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_agent_version#ai_agent_id WisdomAiAgentVersion#ai_agent_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.assistantId">assistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_agent_version#assistant_id WisdomAiAgentVersion#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_agent_version#modified_time_seconds WisdomAiAgentVersion#modified_time_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aiAgentId`<sup>Required</sup> <a name="aiAgentId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.aiAgentId"></a>

```typescript
public readonly aiAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_agent_version#ai_agent_id WisdomAiAgentVersion#ai_agent_id}.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_agent_version#assistant_id WisdomAiAgentVersion#assistant_id}.

---

##### `modifiedTimeSeconds`<sup>Optional</sup> <a name="modifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiAgentVersion.WisdomAiAgentVersionConfig.property.modifiedTimeSeconds"></a>

```typescript
public readonly modifiedTimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_agent_version#modified_time_seconds WisdomAiAgentVersion#modified_time_seconds}.

---



