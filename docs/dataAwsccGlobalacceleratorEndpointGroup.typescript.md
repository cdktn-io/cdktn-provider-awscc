# `dataAwsccGlobalacceleratorEndpointGroup` Submodule <a name="`dataAwsccGlobalacceleratorEndpointGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlobalacceleratorEndpointGroup <a name="DataAwsccGlobalacceleratorEndpointGroup" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup(scope: Construct, id: string, config: DataAwsccGlobalacceleratorEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig">DataAwsccGlobalacceleratorEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig">DataAwsccGlobalacceleratorEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isConstruct"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformElement"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlobalacceleratorEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlobalacceleratorEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlobalacceleratorEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointConfigurations">endpointConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList">DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointGroupArn">endpointGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointGroupRegion">endpointGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckPort">healthCheckPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.listenerArn">listenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.portOverrides">portOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList">DataAwsccGlobalacceleratorEndpointGroupPortOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.thresholdCount">thresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `endpointConfigurations`<sup>Required</sup> <a name="endpointConfigurations" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointConfigurations"></a>

```typescript
public readonly endpointConfigurations: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList">DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList</a>

---

##### `endpointGroupArn`<sup>Required</sup> <a name="endpointGroupArn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointGroupArn"></a>

```typescript
public readonly endpointGroupArn: string;
```

- *Type:* string

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="endpointGroupRegion" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```typescript
public readonly endpointGroupRegion: string;
```

- *Type:* string

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="healthCheckIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```typescript
public readonly healthCheckIntervalSeconds: number;
```

- *Type:* number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `healthCheckPort`<sup>Required</sup> <a name="healthCheckPort" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```typescript
public readonly healthCheckPort: number;
```

- *Type:* number

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="healthCheckProtocol" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```typescript
public readonly healthCheckProtocol: string;
```

- *Type:* string

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

---

##### `portOverrides`<sup>Required</sup> <a name="portOverrides" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.portOverrides"></a>

```typescript
public readonly portOverrides: DataAwsccGlobalacceleratorEndpointGroupPortOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList">DataAwsccGlobalacceleratorEndpointGroupPortOverridesList</a>

---

##### `thresholdCount`<sup>Required</sup> <a name="thresholdCount" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```typescript
public readonly thresholdCount: number;
```

- *Type:* number

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="trafficDialPercentage" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```typescript
public readonly trafficDialPercentage: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlobalacceleratorEndpointGroupConfig <a name="DataAwsccGlobalacceleratorEndpointGroupConfig" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

const dataAwsccGlobalacceleratorEndpointGroupConfig: dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_endpoint_group#id DataAwsccGlobalacceleratorEndpointGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations <a name="DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

const dataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations: dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations = { ... }
```


### DataAwsccGlobalacceleratorEndpointGroupPortOverrides <a name="DataAwsccGlobalacceleratorEndpointGroupPortOverrides" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

const dataAwsccGlobalacceleratorEndpointGroupPortOverrides: dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList <a name="DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference <a name="DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn">attachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled">clientIpPreservationEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations">DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentArn`<sup>Required</sup> <a name="attachmentArn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn"></a>

```typescript
public readonly attachmentArn: string;
```

- *Type:* string

---

##### `clientIpPreservationEnabled`<sup>Required</sup> <a name="clientIpPreservationEnabled" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled"></a>

```typescript
public readonly clientIpPreservationEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations">DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations</a>

---


### DataAwsccGlobalacceleratorEndpointGroupPortOverridesList <a name="DataAwsccGlobalacceleratorEndpointGroupPortOverridesList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.get"></a>

```typescript
public get(index: number): DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference <a name="DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorEndpointGroup } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort">endpointPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides">DataAwsccGlobalacceleratorEndpointGroupPortOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointPort`<sup>Required</sup> <a name="endpointPort" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort"></a>

```typescript
public readonly endpointPort: number;
```

- *Type:* number

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlobalacceleratorEndpointGroupPortOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides">DataAwsccGlobalacceleratorEndpointGroupPortOverrides</a>

---



