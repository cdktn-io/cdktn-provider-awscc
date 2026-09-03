# `pcaconnectorscepConnector` Submodule <a name="`pcaconnectorscepConnector` Submodule" id="@cdktn/provider-awscc.pcaconnectorscepConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectorscepConnector <a name="PcaconnectorscepConnector" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector awscc_pcaconnectorscep_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

new pcaconnectorscepConnector.PcaconnectorscepConnector(scope: Construct, id: string, config: PcaconnectorscepConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig">PcaconnectorscepConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig">PcaconnectorscepConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement">putMobileDeviceManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetMobileDeviceManagement">resetMobileDeviceManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMobileDeviceManagement` <a name="putMobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement"></a>

```typescript
public putMobileDeviceManagement(value: PcaconnectorscepConnectorMobileDeviceManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

---

##### `resetMobileDeviceManagement` <a name="resetMobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetMobileDeviceManagement"></a>

```typescript
public resetMobileDeviceManagement(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectorscepConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PcaconnectorscepConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcaconnectorscepConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcaconnectorscepConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectorscepConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagement">mobileDeviceManagement</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference">PcaconnectorscepConnectorMobileDeviceManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.openIdConfiguration">openIdConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference">PcaconnectorscepConnectorOpenIdConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagementInput">mobileDeviceManagementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mobileDeviceManagement`<sup>Required</sup> <a name="mobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagement"></a>

```typescript
public readonly mobileDeviceManagement: PcaconnectorscepConnectorMobileDeviceManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference">PcaconnectorscepConnectorMobileDeviceManagementOutputReference</a>

---

##### `openIdConfiguration`<sup>Required</sup> <a name="openIdConfiguration" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.openIdConfiguration"></a>

```typescript
public readonly openIdConfiguration: PcaconnectorscepConnectorOpenIdConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference">PcaconnectorscepConnectorOpenIdConfigurationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `mobileDeviceManagementInput`<sup>Optional</sup> <a name="mobileDeviceManagementInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagementInput"></a>

```typescript
public readonly mobileDeviceManagementInput: IResolvable | PcaconnectorscepConnectorMobileDeviceManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectorscepConnectorConfig <a name="PcaconnectorscepConnectorConfig" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.Initializer"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

const pcaconnectorscepConnectorConfig: pcaconnectorscepConnector.PcaconnectorscepConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn PcaconnectorscepConnector#certificate_authority_arn}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.mobileDeviceManagement">mobileDeviceManagement</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#mobile_device_management PcaconnectorscepConnector#mobile_device_management}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#tags PcaconnectorscepConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id PcaconnectorscepConnector#vpc_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn PcaconnectorscepConnector#certificate_authority_arn}.

---

##### `mobileDeviceManagement`<sup>Optional</sup> <a name="mobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.mobileDeviceManagement"></a>

```typescript
public readonly mobileDeviceManagement: PcaconnectorscepConnectorMobileDeviceManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#mobile_device_management PcaconnectorscepConnector#mobile_device_management}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#tags PcaconnectorscepConnector#tags}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id PcaconnectorscepConnector#vpc_endpoint_id}.

---

### PcaconnectorscepConnectorMobileDeviceManagement <a name="PcaconnectorscepConnectorMobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.Initializer"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

const pcaconnectorscepConnectorMobileDeviceManagement: pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.property.intune">intune</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#intune PcaconnectorscepConnector#intune}. |

---

##### `intune`<sup>Optional</sup> <a name="intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.property.intune"></a>

```typescript
public readonly intune: PcaconnectorscepConnectorMobileDeviceManagementIntune;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#intune PcaconnectorscepConnector#intune}.

---

### PcaconnectorscepConnectorMobileDeviceManagementIntune <a name="PcaconnectorscepConnectorMobileDeviceManagementIntune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.Initializer"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

const pcaconnectorscepConnectorMobileDeviceManagementIntune: pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.azureApplicationId">azureApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#azure_application_id PcaconnectorscepConnector#azure_application_id}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#domain PcaconnectorscepConnector#domain}. |

---

##### `azureApplicationId`<sup>Optional</sup> <a name="azureApplicationId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.azureApplicationId"></a>

```typescript
public readonly azureApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#azure_application_id PcaconnectorscepConnector#azure_application_id}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#domain PcaconnectorscepConnector#domain}.

---

### PcaconnectorscepConnectorOpenIdConfiguration <a name="PcaconnectorscepConnectorOpenIdConfiguration" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration.Initializer"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

const pcaconnectorscepConnectorOpenIdConfiguration: pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference <a name="PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

new pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetAzureApplicationId">resetAzureApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureApplicationId` <a name="resetAzureApplicationId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetAzureApplicationId"></a>

```typescript
public resetAzureApplicationId(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationIdInput">azureApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId">azureApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureApplicationIdInput`<sup>Optional</sup> <a name="azureApplicationIdInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationIdInput"></a>

```typescript
public readonly azureApplicationIdInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `azureApplicationId`<sup>Required</sup> <a name="azureApplicationId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId"></a>

```typescript
public readonly azureApplicationId: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcaconnectorscepConnectorMobileDeviceManagementIntune;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---


### PcaconnectorscepConnectorMobileDeviceManagementOutputReference <a name="PcaconnectorscepConnectorMobileDeviceManagementOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

new pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune">putIntune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resetIntune">resetIntune</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntune` <a name="putIntune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune"></a>

```typescript
public putIntune(value: PcaconnectorscepConnectorMobileDeviceManagementIntune): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---

##### `resetIntune` <a name="resetIntune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resetIntune"></a>

```typescript
public resetIntune(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune">intune</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intuneInput">intuneInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intune`<sup>Required</sup> <a name="intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune"></a>

```typescript
public readonly intune: PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a>

---

##### `intuneInput`<sup>Optional</sup> <a name="intuneInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intuneInput"></a>

```typescript
public readonly intuneInput: IResolvable | PcaconnectorscepConnectorMobileDeviceManagementIntune;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcaconnectorscepConnectorMobileDeviceManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

---


### PcaconnectorscepConnectorOpenIdConfigurationOutputReference <a name="PcaconnectorscepConnectorOpenIdConfigurationOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer"></a>

```typescript
import { pcaconnectorscepConnector } from '@cdktn/provider-awscc'

new pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration">PcaconnectorscepConnectorOpenIdConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PcaconnectorscepConnectorOpenIdConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration">PcaconnectorscepConnectorOpenIdConfiguration</a>

---



