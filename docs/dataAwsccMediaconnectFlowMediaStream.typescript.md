# `dataAwsccMediaconnectFlowMediaStream` Submodule <a name="`dataAwsccMediaconnectFlowMediaStream` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectFlowMediaStream <a name="DataAwsccMediaconnectFlowMediaStream" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream(scope: Construct, id: string, config: DataAwsccMediaconnectFlowMediaStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig">DataAwsccMediaconnectFlowMediaStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig">DataAwsccMediaconnectFlowMediaStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectFlowMediaStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectFlowMediaStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectFlowMediaStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.clockRate">clockRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fmt">fmt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamId">mediaStreamId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamType">mediaStreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList">DataAwsccMediaconnectFlowMediaStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.videoFormat">videoFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.attributes"></a>

```typescript
public readonly attributes: DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference</a>

---

##### `clockRate`<sup>Required</sup> <a name="clockRate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.clockRate"></a>

```typescript
public readonly clockRate: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `fmt`<sup>Required</sup> <a name="fmt" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fmt"></a>

```typescript
public readonly fmt: number;
```

- *Type:* number

---

##### `mediaStreamId`<sup>Required</sup> <a name="mediaStreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamId"></a>

```typescript
public readonly mediaStreamId: number;
```

- *Type:* number

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

---

##### `mediaStreamType`<sup>Required</sup> <a name="mediaStreamType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamType"></a>

```typescript
public readonly mediaStreamType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediaconnectFlowMediaStreamTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList">DataAwsccMediaconnectFlowMediaStreamTagsList</a>

---

##### `videoFormat`<sup>Required</sup> <a name="videoFormat" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.videoFormat"></a>

```typescript
public readonly videoFormat: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectFlowMediaStreamAttributes <a name="DataAwsccMediaconnectFlowMediaStreamAttributes" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowMediaStreamAttributes: dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes = { ... }
```


### DataAwsccMediaconnectFlowMediaStreamAttributesFmtp <a name="DataAwsccMediaconnectFlowMediaStreamAttributesFmtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowMediaStreamAttributesFmtp: dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp = { ... }
```


### DataAwsccMediaconnectFlowMediaStreamConfig <a name="DataAwsccMediaconnectFlowMediaStreamConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowMediaStreamConfig: dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/mediaconnect_flow_media_stream#id DataAwsccMediaconnectFlowMediaStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectFlowMediaStreamTags <a name="DataAwsccMediaconnectFlowMediaStreamTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowMediaStreamTags: dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder">channelOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry">colorimetry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate">exactFramerate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par">par</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode">scanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs">tcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp">DataAwsccMediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelOrder`<sup>Required</sup> <a name="channelOrder" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder"></a>

```typescript
public readonly channelOrder: string;
```

- *Type:* string

---

##### `colorimetry`<sup>Required</sup> <a name="colorimetry" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry"></a>

```typescript
public readonly colorimetry: string;
```

- *Type:* string

---

##### `exactFramerate`<sup>Required</sup> <a name="exactFramerate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate"></a>

```typescript
public readonly exactFramerate: string;
```

- *Type:* string

---

##### `par`<sup>Required</sup> <a name="par" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par"></a>

```typescript
public readonly par: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `scanMode`<sup>Required</sup> <a name="scanMode" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode"></a>

```typescript
public readonly scanMode: string;
```

- *Type:* string

---

##### `tcs`<sup>Required</sup> <a name="tcs" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs"></a>

```typescript
public readonly tcs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowMediaStreamAttributesFmtp;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp">DataAwsccMediaconnectFlowMediaStreamAttributesFmtp</a>

---


### DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.lang">lang</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes">DataAwsccMediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fmtp`<sup>Required</sup> <a name="fmtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp"></a>

```typescript
public readonly fmtp: DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference</a>

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.lang"></a>

```typescript
public readonly lang: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowMediaStreamAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes">DataAwsccMediaconnectFlowMediaStreamAttributes</a>

---


### DataAwsccMediaconnectFlowMediaStreamTagsList <a name="DataAwsccMediaconnectFlowMediaStreamTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectFlowMediaStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectFlowMediaStreamTagsOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags">DataAwsccMediaconnectFlowMediaStreamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowMediaStreamTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags">DataAwsccMediaconnectFlowMediaStreamTags</a>

---



