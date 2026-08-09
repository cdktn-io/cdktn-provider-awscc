# `dataAwsccRtbfabricLink` Submodule <a name="`dataAwsccRtbfabricLink` Submodule" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRtbfabricLink <a name="DataAwsccRtbfabricLink" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link awscc_rtbfabric_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLink(scope: Construct, id: string, config: DataAwsccRtbfabricLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig">DataAwsccRtbfabricLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig">DataAwsccRtbfabricLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRtbfabricLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isConstruct"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformElement"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformDataSource"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRtbfabricLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRtbfabricLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRtbfabricLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRtbfabricLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.httpResponderAllowed">httpResponderAllowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkAttributes">linkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference">DataAwsccRtbfabricLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkDirection">linkDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkLogSettings">linkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkStatus">linkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.moduleConfigurationList">moduleConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList">DataAwsccRtbfabricLinkModuleConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.peerGatewayId">peerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList">DataAwsccRtbfabricLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `httpResponderAllowed`<sup>Required</sup> <a name="httpResponderAllowed" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.httpResponderAllowed"></a>

```typescript
public readonly httpResponderAllowed: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `linkAttributes`<sup>Required</sup> <a name="linkAttributes" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkAttributes"></a>

```typescript
public readonly linkAttributes: DataAwsccRtbfabricLinkLinkAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference">DataAwsccRtbfabricLinkLinkAttributesOutputReference</a>

---

##### `linkDirection`<sup>Required</sup> <a name="linkDirection" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkDirection"></a>

```typescript
public readonly linkDirection: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `linkLogSettings`<sup>Required</sup> <a name="linkLogSettings" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkLogSettings"></a>

```typescript
public readonly linkLogSettings: DataAwsccRtbfabricLinkLinkLogSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsOutputReference</a>

---

##### `linkStatus`<sup>Required</sup> <a name="linkStatus" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkStatus"></a>

```typescript
public readonly linkStatus: string;
```

- *Type:* string

---

##### `moduleConfigurationList`<sup>Required</sup> <a name="moduleConfigurationList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.moduleConfigurationList"></a>

```typescript
public readonly moduleConfigurationList: DataAwsccRtbfabricLinkModuleConfigurationListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList">DataAwsccRtbfabricLinkModuleConfigurationListStructList</a>

---

##### `peerGatewayId`<sup>Required</sup> <a name="peerGatewayId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.peerGatewayId"></a>

```typescript
public readonly peerGatewayId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.tags"></a>

```typescript
public readonly tags: DataAwsccRtbfabricLinkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList">DataAwsccRtbfabricLinkTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRtbfabricLinkConfig <a name="DataAwsccRtbfabricLinkConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkConfig: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link#id DataAwsccRtbfabricLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRtbfabricLinkLinkAttributes <a name="DataAwsccRtbfabricLinkLinkAttributes" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkLinkAttributes: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes = { ... }
```


### DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking <a name="DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking = { ... }
```


### DataAwsccRtbfabricLinkLinkLogSettings <a name="DataAwsccRtbfabricLinkLinkLogSettings" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkLinkLogSettings: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings = { ... }
```


### DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs <a name="DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs = { ... }
```


### DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListModuleParameters: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria = { ... }
```


### DataAwsccRtbfabricLinkModuleConfigurationListStruct <a name="DataAwsccRtbfabricLinkModuleConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkModuleConfigurationListStruct: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct = { ... }
```


### DataAwsccRtbfabricLinkTags <a name="DataAwsccRtbfabricLinkTags" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkTags: dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRtbfabricLinkLinkAttributesOutputReference <a name="DataAwsccRtbfabricLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.customerProvidedId">customerProvidedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.responderErrorMasking">responderErrorMasking</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList">DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes">DataAwsccRtbfabricLinkLinkAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerProvidedId`<sup>Required</sup> <a name="customerProvidedId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```typescript
public readonly customerProvidedId: string;
```

- *Type:* string

---

##### `responderErrorMasking`<sup>Required</sup> <a name="responderErrorMasking" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```typescript
public readonly responderErrorMasking: DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList">DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkLinkAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes">DataAwsccRtbfabricLinkLinkAttributes</a>

---


### DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList <a name="DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference <a name="DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">httpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">loggingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">responseLoggingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking">DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `httpCode`<sup>Required</sup> <a name="httpCode" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```typescript
public readonly httpCode: string;
```

- *Type:* string

---

##### `loggingTypes`<sup>Required</sup> <a name="loggingTypes" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```typescript
public readonly loggingTypes: string[];
```

- *Type:* string[]

---

##### `responseLoggingPercentage`<sup>Required</sup> <a name="responseLoggingPercentage" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```typescript
public readonly responseLoggingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking">DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking</a>

---


### DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">errorLog</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">filterLog</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorLog`<sup>Required</sup> <a name="errorLog" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```typescript
public readonly errorLog: number;
```

- *Type:* number

---

##### `filterLog`<sup>Required</sup> <a name="filterLog" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```typescript
public readonly filterLog: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference <a name="DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">linkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkApplicationLogSampling`<sup>Required</sup> <a name="linkApplicationLogSampling" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```typescript
public readonly linkApplicationLogSampling: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs</a>

---


### DataAwsccRtbfabricLinkLinkLogSettingsOutputReference <a name="DataAwsccRtbfabricLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings">DataAwsccRtbfabricLinkLinkLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkLinkLogSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings">DataAwsccRtbfabricLinkLinkLogSettings</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentage">passThroughPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCode">reasonCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passThroughPercentage`<sup>Required</sup> <a name="passThroughPercentage" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentage"></a>

```typescript
public readonly passThroughPercentage: number;
```

- *Type:* number

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `reasonCode`<sup>Required</sup> <a name="reasonCode" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCode"></a>

```typescript
public readonly reasonCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCode">noBidReasonCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noBidReasonCode`<sup>Required</sup> <a name="noBidReasonCode" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCode"></a>

```typescript
public readonly noBidReasonCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTag">headerTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBid">noBid</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerTag`<sup>Required</sup> <a name="headerTag" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTag"></a>

```typescript
public readonly headerTag: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference</a>

---

##### `noBid`<sup>Required</sup> <a name="noBid" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBid"></a>

```typescript
public readonly noBid: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteria"></a>

```typescript
public readonly criteria: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentage">holdbackPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.action"></a>

```typescript
public readonly action: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference</a>

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList</a>

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `holdbackPercentage`<sup>Required</sup> <a name="holdbackPercentage" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentage"></a>

```typescript
public readonly holdbackPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBid">noBid</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttribute">openRtbAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters">DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noBid`<sup>Required</sup> <a name="noBid" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBid"></a>

```typescript
public readonly noBid: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference</a>

---

##### `openRtbAttribute`<sup>Required</sup> <a name="openRtbAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttribute"></a>

```typescript
public readonly openRtbAttribute: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters">DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListStructList <a name="DataAwsccRtbfabricLinkModuleConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParameters">moduleParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct">DataAwsccRtbfabricLinkModuleConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `moduleParameters`<sup>Required</sup> <a name="moduleParameters" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParameters"></a>

```typescript
public readonly moduleParameters: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkModuleConfigurationListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct">DataAwsccRtbfabricLinkModuleConfigurationListStruct</a>

---


### DataAwsccRtbfabricLinkTagsList <a name="DataAwsccRtbfabricLinkTagsList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricLinkTagsOutputReference <a name="DataAwsccRtbfabricLinkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLink } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags">DataAwsccRtbfabricLinkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags">DataAwsccRtbfabricLinkTags</a>

---



