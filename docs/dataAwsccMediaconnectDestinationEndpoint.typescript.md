# `dataAwsccMediaconnectDestinationEndpoint` Submodule <a name="`dataAwsccMediaconnectDestinationEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectDestinationEndpoint <a name="DataAwsccMediaconnectDestinationEndpoint" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_destination_endpoint awscc_mediaconnect_destination_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint(scope: Construct, id: string, config: DataAwsccMediaconnectDestinationEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig">DataAwsccMediaconnectDestinationEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig">DataAwsccMediaconnectDestinationEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isConstruct"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectDestinationEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectDestinationEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_destination_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectDestinationEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.associatedResourceDetails">associatedResourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.connectionState">connectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.destinationEndpointId">destinationEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.lifecycleManagement">lifecycleManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.registrationState">registrationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList">DataAwsccMediaconnectDestinationEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associatedResourceDetails`<sup>Required</sup> <a name="associatedResourceDetails" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.associatedResourceDetails"></a>

```typescript
public readonly associatedResourceDetails: DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference</a>

---

##### `connectionState`<sup>Required</sup> <a name="connectionState" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.connectionState"></a>

```typescript
public readonly connectionState: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationEndpointId`<sup>Required</sup> <a name="destinationEndpointId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.destinationEndpointId"></a>

```typescript
public readonly destinationEndpointId: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `lifecycleManagement`<sup>Required</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.lifecycleManagement"></a>

```typescript
public readonly lifecycleManagement: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `registrationState`<sup>Required</sup> <a name="registrationState" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.registrationState"></a>

```typescript
public readonly registrationState: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediaconnectDestinationEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList">DataAwsccMediaconnectDestinationEndpointTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails <a name="DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails = { ... }
```


### DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput <a name="DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfig <a name="DataAwsccMediaconnectDestinationEndpointConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfig: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_destination_endpoint#id DataAwsccMediaconnectDestinationEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectDestinationEndpointConfiguration <a name="DataAwsccMediaconnectDestinationEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfiguration: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput <a name="DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationRouterInput: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandard <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandard" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandard: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener = { ... }
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase = { ... }
```


### DataAwsccMediaconnectDestinationEndpointTags <a name="DataAwsccMediaconnectDestinationEndpointTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectDestinationEndpointTags: dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference <a name="DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput">routerInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard">standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routerInput`<sup>Required</sup> <a name="routerInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput"></a>

```typescript
public readonly routerInput: DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails</a>

---


### DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference <a name="DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput">routerInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.standard">standard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration">DataAwsccMediaconnectDestinationEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routerInput`<sup>Required</sup> <a name="routerInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput"></a>

```typescript
public readonly routerInput: DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.standard"></a>

```typescript
public readonly standard: DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration">DataAwsccMediaconnectDestinationEndpointConfiguration</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn">routerInputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput">DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routerInputArn`<sup>Required</sup> <a name="routerInputArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn"></a>

```typescript
public readonly routerInputArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput">DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public">public</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public"></a>

```typescript
public readonly public: DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc"></a>

```typescript
public readonly vpc: DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules">destinationAllowRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAllowRules`<sup>Required</sup> <a name="destinationAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules"></a>

```typescript
public readonly destinationAllowRules: DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration">destinationNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType">destinationNetworkingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard">DataAwsccMediaconnectDestinationEndpointConfigurationStandard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationNetworkingConfiguration`<sup>Required</sup> <a name="destinationNetworkingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration"></a>

```typescript
public readonly destinationNetworkingConfiguration: DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a>

---

##### `destinationNetworkingType`<sup>Required</sup> <a name="destinationNetworkingType" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType"></a>

```typescript
public readonly destinationNetworkingType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolConfiguration`<sup>Required</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```typescript
public readonly protocolConfiguration: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandard;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard">DataAwsccMediaconnectDestinationEndpointConfigurationStandard</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">srtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">srtListener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rist`<sup>Required</sup> <a name="rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```typescript
public readonly rist: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `rtp`<sup>Required</sup> <a name="rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```typescript
public readonly rtp: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `srtCaller`<sup>Required</sup> <a name="srtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```typescript
public readonly srtCaller: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `srtListener`<sup>Required</sup> <a name="srtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```typescript
public readonly srtListener: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort">destinationIngestPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationIngestPort`<sup>Required</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort"></a>

```typescript
public readonly destinationIngestPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort">destinationIngestPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState">forwardErrorCorrectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationIngestPort`<sup>Required</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort"></a>

```typescript
public readonly destinationIngestPort: number;
```

- *Type:* number

---

##### `forwardErrorCorrectionState`<sup>Required</sup> <a name="forwardErrorCorrectionState" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState"></a>

```typescript
public readonly forwardErrorCorrectionState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase">encryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort">sourceListenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionPassphrase`<sup>Required</sup> <a name="encryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase"></a>

```typescript
public readonly encryptionPassphrase: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a>

---

##### `minimumLatencyMilliseconds`<sup>Required</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```typescript
public readonly minimumLatencyMilliseconds: number;
```

- *Type:* number

---

##### `sourceListenerPort`<sup>Required</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort"></a>

```typescript
public readonly sourceListenerPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort">destinationIngestPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase">encryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationIngestPort`<sup>Required</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort"></a>

```typescript
public readonly destinationIngestPort: number;
```

- *Type:* number

---

##### `encryptionPassphrase`<sup>Required</sup> <a name="encryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase"></a>

```typescript
public readonly encryptionPassphrase: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a>

---

##### `minimumLatencyMilliseconds`<sup>Required</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```typescript
public readonly minimumLatencyMilliseconds: number;
```

- *Type:* number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---


### DataAwsccMediaconnectDestinationEndpointTagsList <a name="DataAwsccMediaconnectDestinationEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectDestinationEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectDestinationEndpointTagsOutputReference <a name="DataAwsccMediaconnectDestinationEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectDestinationEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags">DataAwsccMediaconnectDestinationEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectDestinationEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags">DataAwsccMediaconnectDestinationEndpointTags</a>

---



