# `chimeVoiceConnector` Submodule <a name="`chimeVoiceConnector` Submodule" id="@cdktn/provider-awscc.chimeVoiceConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnector <a name="ChimeVoiceConnector" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector awscc_chime_voice_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.Initializer"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

new chimeVoiceConnector.ChimeVoiceConnector(scope: Construct, id: string, config: ChimeVoiceConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig">ChimeVoiceConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig">ChimeVoiceConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.putTags"></a>

```typescript
public putTags(value: IResolvable | ChimeVoiceConnectorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a>[]

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeVoiceConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isConstruct"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

chimeVoiceConnector.ChimeVoiceConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isTerraformElement"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

chimeVoiceConnector.ChimeVoiceConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isTerraformResource"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

chimeVoiceConnector.ChimeVoiceConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.generateConfigForImport"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

chimeVoiceConnector.ChimeVoiceConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChimeVoiceConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeVoiceConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeVoiceConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.outboundHostName">outboundHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList">ChimeVoiceConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.voiceConnectorArn">voiceConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.requireEncryptionInput">requireEncryptionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.requireEncryption">requireEncryption</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outboundHostName`<sup>Required</sup> <a name="outboundHostName" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.outboundHostName"></a>

```typescript
public readonly outboundHostName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.tags"></a>

```typescript
public readonly tags: ChimeVoiceConnectorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList">ChimeVoiceConnectorTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `voiceConnectorArn`<sup>Required</sup> <a name="voiceConnectorArn" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.voiceConnectorArn"></a>

```typescript
public readonly voiceConnectorArn: string;
```

- *Type:* string

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `requireEncryptionInput`<sup>Optional</sup> <a name="requireEncryptionInput" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.requireEncryptionInput"></a>

```typescript
public readonly requireEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChimeVoiceConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a>[]

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `requireEncryption`<sup>Required</sup> <a name="requireEncryption" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.requireEncryption"></a>

```typescript
public readonly requireEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorConfig <a name="ChimeVoiceConnectorConfig" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.Initializer"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

const chimeVoiceConnectorConfig: chimeVoiceConnector.ChimeVoiceConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.name">name</a></code> | <code>string</code> | The name of the Voice Connector. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.requireEncryption">requireEncryption</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables or disables encryption for the Voice Connector. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS Region in which the Voice Connector is created. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.networkType">networkType</a></code> | <code>string</code> | The type of network for the Voice Connector. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a>[]</code> | The tags assigned to the Voice Connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Voice Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector#name ChimeVoiceConnector#name}

---

##### `requireEncryption`<sup>Required</sup> <a name="requireEncryption" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.requireEncryption"></a>

```typescript
public readonly requireEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables or disables encryption for the Voice Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector#require_encryption ChimeVoiceConnector#require_encryption}

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS Region in which the Voice Connector is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector#aws_region ChimeVoiceConnector#aws_region}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

The type of network for the Voice Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector#network_type ChimeVoiceConnector#network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChimeVoiceConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a>[]

The tags assigned to the Voice Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector#tags ChimeVoiceConnector#tags}

---

### ChimeVoiceConnectorTags <a name="ChimeVoiceConnectorTags" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags.Initializer"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

const chimeVoiceConnectorTags: chimeVoiceConnector.ChimeVoiceConnectorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector#key ChimeVoiceConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_voice_connector#value ChimeVoiceConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorTagsList <a name="ChimeVoiceConnectorTagsList" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.Initializer"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

new chimeVoiceConnector.ChimeVoiceConnectorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.get"></a>

```typescript
public get(index: number): ChimeVoiceConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeVoiceConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a>[]

---


### ChimeVoiceConnectorTagsOutputReference <a name="ChimeVoiceConnectorTagsOutputReference" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer"></a>

```typescript
import { chimeVoiceConnector } from '@cdktn/provider-awscc'

new chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeVoiceConnectorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeVoiceConnector.ChimeVoiceConnectorTags">ChimeVoiceConnectorTags</a>

---



