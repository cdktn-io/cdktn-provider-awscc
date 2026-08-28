# `dataAwsccRtbfabricInboundExternalLink` Submodule <a name="`dataAwsccRtbfabricInboundExternalLink` Submodule" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRtbfabricInboundExternalLink <a name="DataAwsccRtbfabricInboundExternalLink" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rtbfabric_inbound_external_link awscc_rtbfabric_inbound_external_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink(scope: Construct, id: string, config: DataAwsccRtbfabricInboundExternalLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig">DataAwsccRtbfabricInboundExternalLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig">DataAwsccRtbfabricInboundExternalLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isConstruct"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isTerraformElement"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isTerraformDataSource"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.generateConfigForImport"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRtbfabricInboundExternalLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRtbfabricInboundExternalLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rtbfabric_inbound_external_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRtbfabricInboundExternalLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.linkAttributes">linkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference">DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.linkLogSettings">linkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.linkStatus">linkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList">DataAwsccRtbfabricInboundExternalLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `linkAttributes`<sup>Required</sup> <a name="linkAttributes" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.linkAttributes"></a>

```typescript
public readonly linkAttributes: DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference">DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference</a>

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `linkLogSettings`<sup>Required</sup> <a name="linkLogSettings" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.linkLogSettings"></a>

```typescript
public readonly linkLogSettings: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference</a>

---

##### `linkStatus`<sup>Required</sup> <a name="linkStatus" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.linkStatus"></a>

```typescript
public readonly linkStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.tags"></a>

```typescript
public readonly tags: DataAwsccRtbfabricInboundExternalLinkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList">DataAwsccRtbfabricInboundExternalLinkTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRtbfabricInboundExternalLinkConfig <a name="DataAwsccRtbfabricInboundExternalLinkConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricInboundExternalLinkConfig: dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rtbfabric_inbound_external_link#id DataAwsccRtbfabricInboundExternalLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRtbfabricInboundExternalLinkLinkAttributes <a name="DataAwsccRtbfabricInboundExternalLinkLinkAttributes" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributes.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricInboundExternalLinkLinkAttributes: dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributes = { ... }
```


### DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking <a name="DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking: dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking = { ... }
```


### DataAwsccRtbfabricInboundExternalLinkLinkLogSettings <a name="DataAwsccRtbfabricInboundExternalLinkLinkLogSettings" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettings.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricInboundExternalLinkLinkLogSettings: dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettings = { ... }
```


### DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs <a name="DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs: dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs = { ... }
```


### DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling: dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling = { ... }
```


### DataAwsccRtbfabricInboundExternalLinkTags <a name="DataAwsccRtbfabricInboundExternalLinkTags" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTags.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricInboundExternalLinkTags: dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference <a name="DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId">customerProvidedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking">responderErrorMasking</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList">DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributes">DataAwsccRtbfabricInboundExternalLinkLinkAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerProvidedId`<sup>Required</sup> <a name="customerProvidedId" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```typescript
public readonly customerProvidedId: string;
```

- *Type:* string

---

##### `responderErrorMasking`<sup>Required</sup> <a name="responderErrorMasking" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```typescript
public readonly responderErrorMasking: DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList">DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricInboundExternalLinkLinkAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributes">DataAwsccRtbfabricInboundExternalLinkLinkAttributes</a>

---


### DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList <a name="DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference <a name="DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">httpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">loggingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">responseLoggingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `httpCode`<sup>Required</sup> <a name="httpCode" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```typescript
public readonly httpCode: string;
```

- *Type:* string

---

##### `loggingTypes`<sup>Required</sup> <a name="loggingTypes" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```typescript
public readonly loggingTypes: string[];
```

- *Type:* string[]

---

##### `responseLoggingPercentage`<sup>Required</sup> <a name="responseLoggingPercentage" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```typescript
public readonly responseLoggingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>

---


### DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">errorLog</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">filterLog</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorLog`<sup>Required</sup> <a name="errorLog" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```typescript
public readonly errorLog: number;
```

- *Type:* number

---

##### `filterLog`<sup>Required</sup> <a name="filterLog" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```typescript
public readonly filterLog: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference <a name="DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">linkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkApplicationLogSampling`<sup>Required</sup> <a name="linkApplicationLogSampling" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```typescript
public readonly linkApplicationLogSampling: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


### DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference <a name="DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettings">DataAwsccRtbfabricInboundExternalLinkLinkLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricInboundExternalLinkLinkLogSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkLinkLogSettings">DataAwsccRtbfabricInboundExternalLinkLinkLogSettings</a>

---


### DataAwsccRtbfabricInboundExternalLinkTagsList <a name="DataAwsccRtbfabricInboundExternalLinkTagsList" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricInboundExternalLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricInboundExternalLinkTagsOutputReference <a name="DataAwsccRtbfabricInboundExternalLinkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTags">DataAwsccRtbfabricInboundExternalLinkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricInboundExternalLinkTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricInboundExternalLink.DataAwsccRtbfabricInboundExternalLinkTags">DataAwsccRtbfabricInboundExternalLinkTags</a>

---



