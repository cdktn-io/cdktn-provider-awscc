# `sesConfigurationSetEventDestination` Submodule <a name="`sesConfigurationSetEventDestination` Submodule" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSetEventDestination <a name="SesConfigurationSetEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new sesConfigurationSetEventDestination.SesConfigurationSetEventDestination(scope: Construct, id: string, config: SesConfigurationSetEventDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig">SesConfigurationSetEventDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig">SesConfigurationSetEventDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination">putEventDestination</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventDestination` <a name="putEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination"></a>

```typescript
public putEventDestination(value: SesConfigurationSetEventDestinationEventDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesConfigurationSetEventDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesConfigurationSetEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesConfigurationSetEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetEventDestinationId">configurationSetEventDestinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestination">eventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestinationInput">eventDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationSetEventDestinationId`<sup>Required</sup> <a name="configurationSetEventDestinationId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetEventDestinationId"></a>

```typescript
public readonly configurationSetEventDestinationId: string;
```

- *Type:* string

---

##### `eventDestination`<sup>Required</sup> <a name="eventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestination"></a>

```typescript
public readonly eventDestination: SesConfigurationSetEventDestinationEventDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetNameInput"></a>

```typescript
public readonly configurationSetNameInput: string;
```

- *Type:* string

---

##### `eventDestinationInput`<sup>Optional</sup> <a name="eventDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestinationInput"></a>

```typescript
public readonly eventDestinationInput: IResolvable | SesConfigurationSetEventDestinationEventDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetEventDestinationConfig <a name="SesConfigurationSetEventDestinationConfig" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const sesConfigurationSetEventDestinationConfig: sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | The name of the configuration set that contains the event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.eventDestination">eventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | The event destination object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

The name of the configuration set that contains the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#configuration_set_name SesConfigurationSetEventDestination#configuration_set_name}

---

##### `eventDestination`<sup>Required</sup> <a name="eventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.eventDestination"></a>

```typescript
public readonly eventDestination: SesConfigurationSetEventDestinationEventDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

The event destination object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#event_destination SesConfigurationSetEventDestination#event_destination}

---

### SesConfigurationSetEventDestinationEventDestination <a name="SesConfigurationSetEventDestinationEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const sesConfigurationSetEventDestinationEventDestination: sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.matchingEventTypes">matchingEventTypes</a></code> | <code>string[]</code> | The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.cloudwatchDestination">cloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination">eventBridgeDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | An object that contains Event bus ARN associated with the event bridge destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.name">name</a></code> | <code>string</code> | The name of the event destination set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | An object that contains SNS topic ARN associated event destination. |

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.matchingEventTypes"></a>

```typescript
public readonly matchingEventTypes: string[];
```

- *Type:* string[]

The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#matching_event_types SesConfigurationSetEventDestination#matching_event_types}

---

##### `cloudwatchDestination`<sup>Optional</sup> <a name="cloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.cloudwatchDestination"></a>

```typescript
public readonly cloudwatchDestination: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#cloudwatch_destination SesConfigurationSetEventDestination#cloudwatch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set.

Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.   

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#enabled SesConfigurationSetEventDestination#enabled}

---

##### `eventBridgeDestination`<sup>Optional</sup> <a name="eventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination"></a>

```typescript
public readonly eventBridgeDestination: SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

An object that contains Event bus ARN associated with the event bridge destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#event_bridge_destination SesConfigurationSetEventDestination#event_bridge_destination}

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination"></a>

```typescript
public readonly kinesisFirehoseDestination: SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#kinesis_firehose_destination SesConfigurationSetEventDestination#kinesis_firehose_destination}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the event destination set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#name SesConfigurationSetEventDestination#name}

---

##### `snsDestination`<sup>Optional</sup> <a name="snsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.snsDestination"></a>

```typescript
public readonly snsDestination: SesConfigurationSetEventDestinationEventDestinationSnsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

An object that contains SNS topic ARN associated event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#sns_destination SesConfigurationSetEventDestination#sns_destination}

---

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const sesConfigurationSetEventDestinationEventDestinationCloudwatchDestination: sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.property.dimensionConfigurations">dimensionConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]</code> | A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch. |

---

##### `dimensionConfigurations`<sup>Optional</sup> <a name="dimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.property.dimensionConfigurations"></a>

```typescript
public readonly dimensionConfigurations: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]

A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#dimension_configurations SesConfigurationSetEventDestination#dimension_configurations}

---

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const sesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations: sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.defaultDimensionValue">defaultDimensionValue</a></code> | <code>string</code> | The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionName">dimensionName</a></code> | <code>string</code> | The name of an Amazon CloudWatch dimension associated with an email sending metric. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionValueSource">dimensionValueSource</a></code> | <code>string</code> | The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. |

---

##### `defaultDimensionValue`<sup>Optional</sup> <a name="defaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.defaultDimensionValue"></a>

```typescript
public readonly defaultDimensionValue: string;
```

- *Type:* string

The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#default_dimension_value SesConfigurationSetEventDestination#default_dimension_value}

---

##### `dimensionName`<sup>Optional</sup> <a name="dimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

The name of an Amazon CloudWatch dimension associated with an email sending metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#dimension_name SesConfigurationSetEventDestination#dimension_name}

---

##### `dimensionValueSource`<sup>Optional</sup> <a name="dimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionValueSource"></a>

```typescript
public readonly dimensionValueSource: string;
```

- *Type:* string

The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch.

To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#dimension_value_source SesConfigurationSetEventDestination#dimension_value_source}

---

### SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination <a name="SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const sesConfigurationSetEventDestinationEventDestinationEventBridgeDestination: sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}. |

---

##### `eventBusArn`<sup>Optional</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}.

---

### SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination <a name="SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const sesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination: sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>string</code> | The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream. |

---

##### `deliveryStreamArn`<sup>Optional</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```typescript
public readonly deliveryStreamArn: string;
```

- *Type:* string

The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#delivery_stream_arn SesConfigurationSetEventDestination#delivery_stream_arn}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#iam_role_arn SesConfigurationSetEventDestination#iam_role_arn}

---

### SesConfigurationSetEventDestinationEventDestinationSnsDestination <a name="SesConfigurationSetEventDestinationEventDestinationSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const sesConfigurationSetEventDestinationEventDestinationSnsDestination: sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}. |

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get"></a>

```typescript
public get(index: number): SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]

---


### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDefaultDimensionValue">resetDefaultDimensionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionName">resetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionValueSource">resetDimensionValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultDimensionValue` <a name="resetDefaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDefaultDimensionValue"></a>

```typescript
public resetDefaultDimensionValue(): void
```

##### `resetDimensionName` <a name="resetDimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionName"></a>

```typescript
public resetDimensionName(): void
```

##### `resetDimensionValueSource` <a name="resetDimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionValueSource"></a>

```typescript
public resetDimensionValueSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValueInput">defaultDimensionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSourceInput">dimensionValueSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue">defaultDimensionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource">dimensionValueSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultDimensionValueInput`<sup>Optional</sup> <a name="defaultDimensionValueInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValueInput"></a>

```typescript
public readonly defaultDimensionValueInput: string;
```

- *Type:* string

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionNameInput"></a>

```typescript
public readonly dimensionNameInput: string;
```

- *Type:* string

---

##### `dimensionValueSourceInput`<sup>Optional</sup> <a name="dimensionValueSourceInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSourceInput"></a>

```typescript
public readonly dimensionValueSourceInput: string;
```

- *Type:* string

---

##### `defaultDimensionValue`<sup>Required</sup> <a name="defaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue"></a>

```typescript
public readonly defaultDimensionValue: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `dimensionValueSource`<sup>Required</sup> <a name="dimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource"></a>

```typescript
public readonly dimensionValueSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>

---


### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations">putDimensionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resetDimensionConfigurations">resetDimensionConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensionConfigurations` <a name="putDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations"></a>

```typescript
public putDimensionConfigurations(value: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]

---

##### `resetDimensionConfigurations` <a name="resetDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resetDimensionConfigurations"></a>

```typescript
public resetDimensionConfigurations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations">dimensionConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurationsInput">dimensionConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionConfigurations`<sup>Required</sup> <a name="dimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations"></a>

```typescript
public readonly dimensionConfigurations: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a>

---

##### `dimensionConfigurationsInput`<sup>Optional</sup> <a name="dimensionConfigurationsInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurationsInput"></a>

```typescript
public readonly dimensionConfigurationsInput: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resetEventBusArn">resetEventBusArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventBusArn` <a name="resetEventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resetEventBusArn"></a>

```typescript
public resetEventBusArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput">eventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput"></a>

```typescript
public readonly eventBusArnInput: string;
```

- *Type:* string

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">resetDeliveryStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStreamArn` <a name="resetDeliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```typescript
public resetDeliveryStreamArn(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">deliveryStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamArnInput`<sup>Optional</sup> <a name="deliveryStreamArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```typescript
public readonly deliveryStreamArnInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```typescript
public readonly deliveryStreamArn: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination">putCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination">putEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination">putKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination">putSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudwatchDestination">resetCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination">resetEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination">resetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination">resetSnsDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchDestination` <a name="putCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination"></a>

```typescript
public putCloudwatchDestination(value: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---

##### `putEventBridgeDestination` <a name="putEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination"></a>

```typescript
public putEventBridgeDestination(value: SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---

##### `putKinesisFirehoseDestination` <a name="putKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination"></a>

```typescript
public putKinesisFirehoseDestination(value: SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---

##### `putSnsDestination` <a name="putSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination"></a>

```typescript
public putSnsDestination(value: SesConfigurationSetEventDestinationEventDestinationSnsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---

##### `resetCloudwatchDestination` <a name="resetCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudwatchDestination"></a>

```typescript
public resetCloudwatchDestination(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEventBridgeDestination` <a name="resetEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination"></a>

```typescript
public resetEventBridgeDestination(): void
```

##### `resetKinesisFirehoseDestination` <a name="resetKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination"></a>

```typescript
public resetKinesisFirehoseDestination(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSnsDestination` <a name="resetSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination"></a>

```typescript
public resetSnsDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination">cloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination">eventBridgeDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestinationInput">cloudwatchDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput">eventBridgeDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput">kinesisFirehoseDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput">matchingEventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput">snsDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes">matchingEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchDestination`<sup>Required</sup> <a name="cloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination"></a>

```typescript
public readonly cloudwatchDestination: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a>

---

##### `eventBridgeDestination`<sup>Required</sup> <a name="eventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination"></a>

```typescript
public readonly eventBridgeDestination: SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a>

---

##### `kinesisFirehoseDestination`<sup>Required</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination"></a>

```typescript
public readonly kinesisFirehoseDestination: SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a>

---

##### `snsDestination`<sup>Required</sup> <a name="snsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination"></a>

```typescript
public readonly snsDestination: SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a>

---

##### `cloudwatchDestinationInput`<sup>Optional</sup> <a name="cloudwatchDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestinationInput"></a>

```typescript
public readonly cloudwatchDestinationInput: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventBridgeDestinationInput`<sup>Optional</sup> <a name="eventBridgeDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput"></a>

```typescript
public readonly eventBridgeDestinationInput: IResolvable | SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---

##### `kinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="kinesisFirehoseDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput"></a>

```typescript
public readonly kinesisFirehoseDestinationInput: IResolvable | SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---

##### `matchingEventTypesInput`<sup>Optional</sup> <a name="matchingEventTypesInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput"></a>

```typescript
public readonly matchingEventTypesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `snsDestinationInput`<sup>Optional</sup> <a name="snsDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput"></a>

```typescript
public readonly snsDestinationInput: IResolvable | SesConfigurationSetEventDestinationEventDestinationSnsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes"></a>

```typescript
public readonly matchingEventTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetEventDestinationEventDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetEventDestinationEventDestinationSnsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---



