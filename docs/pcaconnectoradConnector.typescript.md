# `pcaconnectoradConnector` Submodule <a name="`pcaconnectoradConnector` Submodule" id="@cdktn/provider-awscc.pcaconnectoradConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectoradConnector <a name="PcaconnectoradConnector" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector awscc_pcaconnectorad_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.Initializer"></a>

```typescript
import { pcaconnectoradConnector } from '@cdktn/provider-awscc'

new pcaconnectoradConnector.PcaconnectoradConnector(scope: Construct, id: string, config: PcaconnectoradConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig">PcaconnectoradConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig">PcaconnectoradConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.putVpcInformation">putVpcInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVpcInformation` <a name="putVpcInformation" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.putVpcInformation"></a>

```typescript
public putVpcInformation(value: PcaconnectoradConnectorVpcInformation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.putVpcInformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation">PcaconnectoradConnectorVpcInformation</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectoradConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isConstruct"></a>

```typescript
import { pcaconnectoradConnector } from '@cdktn/provider-awscc'

pcaconnectoradConnector.PcaconnectoradConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isTerraformElement"></a>

```typescript
import { pcaconnectoradConnector } from '@cdktn/provider-awscc'

pcaconnectoradConnector.PcaconnectoradConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isTerraformResource"></a>

```typescript
import { pcaconnectoradConnector } from '@cdktn/provider-awscc'

pcaconnectoradConnector.PcaconnectoradConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.generateConfigForImport"></a>

```typescript
import { pcaconnectoradConnector } from '@cdktn/provider-awscc'

pcaconnectoradConnector.PcaconnectoradConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PcaconnectoradConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcaconnectoradConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcaconnectoradConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectoradConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.vpcInformation">vpcInformation</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference">PcaconnectoradConnectorVpcInformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.vpcInformationInput">vpcInformationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation">PcaconnectoradConnectorVpcInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vpcInformation`<sup>Required</sup> <a name="vpcInformation" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.vpcInformation"></a>

```typescript
public readonly vpcInformation: PcaconnectoradConnectorVpcInformationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference">PcaconnectoradConnectorVpcInformationOutputReference</a>

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcInformationInput`<sup>Optional</sup> <a name="vpcInformationInput" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.vpcInformationInput"></a>

```typescript
public readonly vpcInformationInput: IResolvable | PcaconnectoradConnectorVpcInformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation">PcaconnectoradConnectorVpcInformation</a>

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectoradConnectorConfig <a name="PcaconnectoradConnectorConfig" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.Initializer"></a>

```typescript
import { pcaconnectoradConnector } from '@cdktn/provider-awscc'

const pcaconnectoradConnectorConfig: pcaconnectoradConnector.PcaconnectoradConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#certificate_authority_arn PcaconnectoradConnector#certificate_authority_arn}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#directory_id PcaconnectoradConnector#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.vpcInformation">vpcInformation</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation">PcaconnectoradConnectorVpcInformation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#vpc_information PcaconnectoradConnector#vpc_information}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#tags PcaconnectoradConnector#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#certificate_authority_arn PcaconnectoradConnector#certificate_authority_arn}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#directory_id PcaconnectoradConnector#directory_id}.

---

##### `vpcInformation`<sup>Required</sup> <a name="vpcInformation" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.vpcInformation"></a>

```typescript
public readonly vpcInformation: PcaconnectoradConnectorVpcInformation;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation">PcaconnectoradConnectorVpcInformation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#vpc_information PcaconnectoradConnector#vpc_information}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#tags PcaconnectoradConnector#tags}.

---

### PcaconnectoradConnectorVpcInformation <a name="PcaconnectoradConnectorVpcInformation" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation.Initializer"></a>

```typescript
import { pcaconnectoradConnector } from '@cdktn/provider-awscc'

const pcaconnectoradConnectorVpcInformation: pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#security_group_ids PcaconnectoradConnector#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#ip_address_type PcaconnectoradConnector#ip_address_type}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#security_group_ids PcaconnectoradConnector#security_group_ids}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_connector#ip_address_type PcaconnectoradConnector#ip_address_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### PcaconnectoradConnectorVpcInformationOutputReference <a name="PcaconnectoradConnectorVpcInformationOutputReference" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.Initializer"></a>

```typescript
import { pcaconnectoradConnector } from '@cdktn/provider-awscc'

new pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation">PcaconnectoradConnectorVpcInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcaconnectoradConnectorVpcInformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectoradConnector.PcaconnectoradConnectorVpcInformation">PcaconnectoradConnectorVpcInformation</a>

---



