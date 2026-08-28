# `sesReceiptFilter` Submodule <a name="`sesReceiptFilter` Submodule" id="@cdktn/provider-awscc.sesReceiptFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesReceiptFilter <a name="SesReceiptFilter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter awscc_ses_receipt_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.Initializer"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

new sesReceiptFilter.SesReceiptFilter(scope: Construct, id: string, config: SesReceiptFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig">SesReceiptFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig">SesReceiptFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.putFilter">putFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.putFilter"></a>

```typescript
public putFilter(value: SesReceiptFilterFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter">SesReceiptFilterFilter</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesReceiptFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isConstruct"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

sesReceiptFilter.SesReceiptFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isTerraformElement"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

sesReceiptFilter.SesReceiptFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isTerraformResource"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

sesReceiptFilter.SesReceiptFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.generateConfigForImport"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

sesReceiptFilter.SesReceiptFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesReceiptFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesReceiptFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesReceiptFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesReceiptFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference">SesReceiptFilterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.receiptFilterId">receiptFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter">SesReceiptFilterFilter</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.filter"></a>

```typescript
public readonly filter: SesReceiptFilterFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference">SesReceiptFilterFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `receiptFilterId`<sup>Required</sup> <a name="receiptFilterId" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.receiptFilterId"></a>

```typescript
public readonly receiptFilterId: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SesReceiptFilterFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter">SesReceiptFilterFilter</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesReceiptFilterConfig <a name="SesReceiptFilterConfig" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.Initializer"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

const sesReceiptFilterConfig: sesReceiptFilter.SesReceiptFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter">SesReceiptFilterFilter</a></code> | A structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterConfig.property.filter"></a>

```typescript
public readonly filter: SesReceiptFilterFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter">SesReceiptFilterFilter</a>

A structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#filter SesReceiptFilter#filter}

---

### SesReceiptFilterFilter <a name="SesReceiptFilterFilter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter.Initializer"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

const sesReceiptFilterFilter: sesReceiptFilter.SesReceiptFilterFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter.property.ipFilter">ipFilter</a></code> | <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter">SesReceiptFilterFilterIpFilter</a></code> | A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter.property.name">name</a></code> | <code>string</code> | The name of the IP address filter. |

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter.property.ipFilter"></a>

```typescript
public readonly ipFilter: SesReceiptFilterFilterIpFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter">SesReceiptFilterFilterIpFilter</a>

A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#ip_filter SesReceiptFilter#ip_filter}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the IP address filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#name SesReceiptFilter#name}

---

### SesReceiptFilterFilterIpFilter <a name="SesReceiptFilterFilterIpFilter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter.Initializer"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

const sesReceiptFilterFilterIpFilter: sesReceiptFilter.SesReceiptFilterFilterIpFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter.property.cidr">cidr</a></code> | <code>string</code> | A single IP address or a range of IP addresses to block or allow, specified in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter.property.policy">policy</a></code> | <code>string</code> | Indicates whether to block or allow incoming mail from the specified IP addresses. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

A single IP address or a range of IP addresses to block or allow, specified in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#cidr SesReceiptFilter#cidr}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Indicates whether to block or allow incoming mail from the specified IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#policy SesReceiptFilter#policy}

---

## Classes <a name="Classes" id="Classes"></a>

### SesReceiptFilterFilterIpFilterOutputReference <a name="SesReceiptFilterFilterIpFilterOutputReference" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.Initializer"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

new sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter">SesReceiptFilterFilterIpFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptFilterFilterIpFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter">SesReceiptFilterFilterIpFilter</a>

---


### SesReceiptFilterFilterOutputReference <a name="SesReceiptFilterFilterOutputReference" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.Initializer"></a>

```typescript
import { sesReceiptFilter } from '@cdktn/provider-awscc'

new sesReceiptFilter.SesReceiptFilterFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.putIpFilter">putIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpFilter` <a name="putIpFilter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.putIpFilter"></a>

```typescript
public putIpFilter(value: SesReceiptFilterFilterIpFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.putIpFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter">SesReceiptFilterFilterIpFilter</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.ipFilter">ipFilter</a></code> | <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference">SesReceiptFilterFilterIpFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.ipFilterInput">ipFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter">SesReceiptFilterFilterIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter">SesReceiptFilterFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.ipFilter"></a>

```typescript
public readonly ipFilter: SesReceiptFilterFilterIpFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilterOutputReference">SesReceiptFilterFilterIpFilterOutputReference</a>

---

##### `ipFilterInput`<sup>Optional</sup> <a name="ipFilterInput" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.ipFilterInput"></a>

```typescript
public readonly ipFilterInput: IResolvable | SesReceiptFilterFilterIpFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterIpFilter">SesReceiptFilterFilterIpFilter</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptFilterFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesReceiptFilter.SesReceiptFilterFilter">SesReceiptFilterFilter</a>

---



