# `wisdomMessageTemplateVersion` Submodule <a name="`wisdomMessageTemplateVersion` Submodule" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomMessageTemplateVersion <a name="WisdomMessageTemplateVersion" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template_version awscc_wisdom_message_template_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.Initializer"></a>

```typescript
import { wisdomMessageTemplateVersion } from '@cdktn/provider-awscc'

new wisdomMessageTemplateVersion.WisdomMessageTemplateVersion(scope: Construct, id: string, config: WisdomMessageTemplateVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig">WisdomMessageTemplateVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig">WisdomMessageTemplateVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.resetMessageTemplateContentSha256">resetMessageTemplateContentSha256</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetMessageTemplateContentSha256` <a name="resetMessageTemplateContentSha256" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.resetMessageTemplateContentSha256"></a>

```typescript
public resetMessageTemplateContentSha256(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomMessageTemplateVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isConstruct"></a>

```typescript
import { wisdomMessageTemplateVersion } from '@cdktn/provider-awscc'

wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isTerraformElement"></a>

```typescript
import { wisdomMessageTemplateVersion } from '@cdktn/provider-awscc'

wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isTerraformResource"></a>

```typescript
import { wisdomMessageTemplateVersion } from '@cdktn/provider-awscc'

wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.generateConfigForImport"></a>

```typescript
import { wisdomMessageTemplateVersion } from '@cdktn/provider-awscc'

wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WisdomMessageTemplateVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomMessageTemplateVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomMessageTemplateVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomMessageTemplateVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateVersionArn">messageTemplateVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateVersionNumber">messageTemplateVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateArnInput">messageTemplateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateContentSha256Input">messageTemplateContentSha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateArn">messageTemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateContentSha256">messageTemplateContentSha256</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `messageTemplateVersionArn`<sup>Required</sup> <a name="messageTemplateVersionArn" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateVersionArn"></a>

```typescript
public readonly messageTemplateVersionArn: string;
```

- *Type:* string

---

##### `messageTemplateVersionNumber`<sup>Required</sup> <a name="messageTemplateVersionNumber" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateVersionNumber"></a>

```typescript
public readonly messageTemplateVersionNumber: number;
```

- *Type:* number

---

##### `messageTemplateArnInput`<sup>Optional</sup> <a name="messageTemplateArnInput" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateArnInput"></a>

```typescript
public readonly messageTemplateArnInput: string;
```

- *Type:* string

---

##### `messageTemplateContentSha256Input`<sup>Optional</sup> <a name="messageTemplateContentSha256Input" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateContentSha256Input"></a>

```typescript
public readonly messageTemplateContentSha256Input: string;
```

- *Type:* string

---

##### `messageTemplateArn`<sup>Required</sup> <a name="messageTemplateArn" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateArn"></a>

```typescript
public readonly messageTemplateArn: string;
```

- *Type:* string

---

##### `messageTemplateContentSha256`<sup>Required</sup> <a name="messageTemplateContentSha256" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.messageTemplateContentSha256"></a>

```typescript
public readonly messageTemplateContentSha256: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomMessageTemplateVersionConfig <a name="WisdomMessageTemplateVersionConfig" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.Initializer"></a>

```typescript
import { wisdomMessageTemplateVersion } from '@cdktn/provider-awscc'

const wisdomMessageTemplateVersionConfig: wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.messageTemplateArn">messageTemplateArn</a></code> | <code>string</code> | The unqualified Amazon Resource Name (ARN) of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.messageTemplateContentSha256">messageTemplateContentSha256</a></code> | <code>string</code> | The content SHA256 of the message template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `messageTemplateArn`<sup>Required</sup> <a name="messageTemplateArn" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.messageTemplateArn"></a>

```typescript
public readonly messageTemplateArn: string;
```

- *Type:* string

The unqualified Amazon Resource Name (ARN) of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template_version#message_template_arn WisdomMessageTemplateVersion#message_template_arn}

---

##### `messageTemplateContentSha256`<sup>Optional</sup> <a name="messageTemplateContentSha256" id="@cdktn/provider-awscc.wisdomMessageTemplateVersion.WisdomMessageTemplateVersionConfig.property.messageTemplateContentSha256"></a>

```typescript
public readonly messageTemplateContentSha256: string;
```

- *Type:* string

The content SHA256 of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_message_template_version#message_template_content_sha_256 WisdomMessageTemplateVersion#message_template_content_sha_256}

---



