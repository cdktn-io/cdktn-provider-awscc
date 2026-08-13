# `networkmanagerLink` Submodule <a name="`networkmanagerLink` Submodule" id="@cdktn/provider-awscc.networkmanagerLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerLink <a name="NetworkmanagerLink" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link awscc_networkmanager_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

new networkmanagerLink.NetworkmanagerLink(scope: Construct, id: string, config: NetworkmanagerLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig">NetworkmanagerLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig">NetworkmanagerLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth">putBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBandwidth` <a name="putBandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth"></a>

```typescript
public putBandwidth(value: NetworkmanagerLinkBandwidth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerLinkTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetProviderName"></a>

```typescript
public resetProviderName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

networkmanagerLink.NetworkmanagerLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

networkmanagerLink.NetworkmanagerLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

networkmanagerLink.NetworkmanagerLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

networkmanagerLink.NetworkmanagerLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkmanagerLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference">NetworkmanagerLinkBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkArn">linkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList">NetworkmanagerLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidthInput">bandwidthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidth"></a>

```typescript
public readonly bandwidth: NetworkmanagerLinkBandwidthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference">NetworkmanagerLinkBandwidthOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkArn`<sup>Required</sup> <a name="linkArn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkArn"></a>

```typescript
public readonly linkArn: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerLinkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList">NetworkmanagerLinkTagsList</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: IResolvable | NetworkmanagerLinkBandwidth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerLinkBandwidth <a name="NetworkmanagerLinkBandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.Initializer"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

const networkmanagerLinkBandwidth: networkmanagerLink.NetworkmanagerLinkBandwidth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.downloadSpeed">downloadSpeed</a></code> | <code>number</code> | Download speed in Mbps. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.uploadSpeed">uploadSpeed</a></code> | <code>number</code> | Upload speed in Mbps. |

---

##### `downloadSpeed`<sup>Optional</sup> <a name="downloadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.downloadSpeed"></a>

```typescript
public readonly downloadSpeed: number;
```

- *Type:* number

Download speed in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#download_speed NetworkmanagerLink#download_speed}

---

##### `uploadSpeed`<sup>Optional</sup> <a name="uploadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.uploadSpeed"></a>

```typescript
public readonly uploadSpeed: number;
```

- *Type:* number

Upload speed in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#upload_speed NetworkmanagerLink#upload_speed}

---

### NetworkmanagerLinkConfig <a name="NetworkmanagerLinkConfig" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.Initializer"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

const networkmanagerLinkConfig: networkmanagerLink.NetworkmanagerLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | The Bandwidth for the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.siteId">siteId</a></code> | <code>string</code> | The ID of the site. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.description">description</a></code> | <code>string</code> | The description of the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.providerName">providerName</a></code> | <code>string</code> | The provider of the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>[]</code> | The tags for the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.type">type</a></code> | <code>string</code> | The type of the link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.bandwidth"></a>

```typescript
public readonly bandwidth: NetworkmanagerLinkBandwidth;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

The Bandwidth for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#bandwidth NetworkmanagerLink#bandwidth}

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

The ID of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#site_id NetworkmanagerLink#site_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#description NetworkmanagerLink#description}

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

The provider of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#provider_name NetworkmanagerLink#provider_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>[]

The tags for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#tags NetworkmanagerLink#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#type NetworkmanagerLink#type}

---

### NetworkmanagerLinkTags <a name="NetworkmanagerLinkTags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.Initializer"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

const networkmanagerLinkTags: networkmanagerLink.NetworkmanagerLinkTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#key NetworkmanagerLink#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_link#value NetworkmanagerLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerLinkBandwidthOutputReference <a name="NetworkmanagerLinkBandwidthOutputReference" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

new networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetDownloadSpeed">resetDownloadSpeed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetUploadSpeed">resetUploadSpeed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDownloadSpeed` <a name="resetDownloadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetDownloadSpeed"></a>

```typescript
public resetDownloadSpeed(): void
```

##### `resetUploadSpeed` <a name="resetUploadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetUploadSpeed"></a>

```typescript
public resetUploadSpeed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeedInput">downloadSpeedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeedInput">uploadSpeedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeed">downloadSpeed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeed">uploadSpeed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downloadSpeedInput`<sup>Optional</sup> <a name="downloadSpeedInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeedInput"></a>

```typescript
public readonly downloadSpeedInput: number;
```

- *Type:* number

---

##### `uploadSpeedInput`<sup>Optional</sup> <a name="uploadSpeedInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeedInput"></a>

```typescript
public readonly uploadSpeedInput: number;
```

- *Type:* number

---

##### `downloadSpeed`<sup>Required</sup> <a name="downloadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeed"></a>

```typescript
public readonly downloadSpeed: number;
```

- *Type:* number

---

##### `uploadSpeed`<sup>Required</sup> <a name="uploadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeed"></a>

```typescript
public readonly uploadSpeed: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerLinkBandwidth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---


### NetworkmanagerLinkTagsList <a name="NetworkmanagerLinkTagsList" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

new networkmanagerLink.NetworkmanagerLinkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>[]

---


### NetworkmanagerLinkTagsOutputReference <a name="NetworkmanagerLinkTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerLink } from '@cdktn/provider-awscc'

new networkmanagerLink.NetworkmanagerLinkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerLinkTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>

---



