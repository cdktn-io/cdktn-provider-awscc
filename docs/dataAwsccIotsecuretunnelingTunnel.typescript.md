# `dataAwsccIotsecuretunnelingTunnel` Submodule <a name="`dataAwsccIotsecuretunnelingTunnel` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsecuretunnelingTunnel <a name="DataAwsccIotsecuretunnelingTunnel" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotsecuretunneling_tunnel awscc_iotsecuretunneling_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel(scope: Construct, id: string, config: DataAwsccIotsecuretunnelingTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig">DataAwsccIotsecuretunnelingTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig">DataAwsccIotsecuretunnelingTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isConstruct"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformElement"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotsecuretunnelingTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotsecuretunnelingTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotsecuretunneling_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsecuretunnelingTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference">DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList">DataAwsccIotsecuretunnelingTunnelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference">DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tunnelArn">tunnelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference">DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotsecuretunnelingTunnelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList">DataAwsccIotsecuretunnelingTunnelTagsList</a>

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.timeoutConfig"></a>

```typescript
public readonly timeoutConfig: DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference">DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference</a>

---

##### `tunnelArn`<sup>Required</sup> <a name="tunnelArn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tunnelArn"></a>

```typescript
public readonly tunnelArn: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsecuretunnelingTunnelConfig <a name="DataAwsccIotsecuretunnelingTunnelConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

const dataAwsccIotsecuretunnelingTunnelConfig: dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotsecuretunneling_tunnel#id DataAwsccIotsecuretunnelingTunnel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsecuretunnelingTunnelDestinationConfig <a name="DataAwsccIotsecuretunnelingTunnelDestinationConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

const dataAwsccIotsecuretunnelingTunnelDestinationConfig: dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig = { ... }
```


### DataAwsccIotsecuretunnelingTunnelTags <a name="DataAwsccIotsecuretunnelingTunnelTags" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

const dataAwsccIotsecuretunnelingTunnelTags: dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags = { ... }
```


### DataAwsccIotsecuretunnelingTunnelTimeoutConfig <a name="DataAwsccIotsecuretunnelingTunnelTimeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

const dataAwsccIotsecuretunnelingTunnelTimeoutConfig: dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference <a name="DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName">thingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig">DataAwsccIotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsecuretunnelingTunnelDestinationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig">DataAwsccIotsecuretunnelingTunnelDestinationConfig</a>

---


### DataAwsccIotsecuretunnelingTunnelTagsList <a name="DataAwsccIotsecuretunnelingTunnelTagsList" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotsecuretunnelingTunnelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsecuretunnelingTunnelTagsOutputReference <a name="DataAwsccIotsecuretunnelingTunnelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags">DataAwsccIotsecuretunnelingTunnelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsecuretunnelingTunnelTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags">DataAwsccIotsecuretunnelingTunnelTags</a>

---


### DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference <a name="DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes">maxLifetimeTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig">DataAwsccIotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxLifetimeTimeoutMinutes`<sup>Required</sup> <a name="maxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes"></a>

```typescript
public readonly maxLifetimeTimeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsecuretunnelingTunnelTimeoutConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig">DataAwsccIotsecuretunnelingTunnelTimeoutConfig</a>

---



