# `dataAwsccRoute53ResolverFirewallDomainList` Submodule <a name="`dataAwsccRoute53ResolverFirewallDomainList` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53ResolverFirewallDomainList <a name="DataAwsccRoute53ResolverFirewallDomainList" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53resolver_firewall_domain_list awscc_route53resolver_firewall_domain_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

new dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList(scope: Construct, id: string, config: DataAwsccRoute53ResolverFirewallDomainListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig">DataAwsccRoute53ResolverFirewallDomainListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig">DataAwsccRoute53ResolverFirewallDomainListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53ResolverFirewallDomainList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isConstruct"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformElement"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformDataSource"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRoute53ResolverFirewallDomainList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53ResolverFirewallDomainList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53ResolverFirewallDomainList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53resolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53ResolverFirewallDomainList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.creatorRequestId">creatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domainCount">domainCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domainFileUrl">domainFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.managedOwnerName">managedOwnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.modificationTime">modificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList">DataAwsccRoute53ResolverFirewallDomainListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.creatorRequestId"></a>

```typescript
public readonly creatorRequestId: string;
```

- *Type:* string

---

##### `domainCount`<sup>Required</sup> <a name="domainCount" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domainCount"></a>

```typescript
public readonly domainCount: number;
```

- *Type:* number

---

##### `domainFileUrl`<sup>Required</sup> <a name="domainFileUrl" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domainFileUrl"></a>

```typescript
public readonly domainFileUrl: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

---

##### `managedOwnerName`<sup>Required</sup> <a name="managedOwnerName" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.managedOwnerName"></a>

```typescript
public readonly managedOwnerName: string;
```

- *Type:* string

---

##### `modificationTime`<sup>Required</sup> <a name="modificationTime" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.modificationTime"></a>

```typescript
public readonly modificationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.tags"></a>

```typescript
public readonly tags: DataAwsccRoute53ResolverFirewallDomainListTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList">DataAwsccRoute53ResolverFirewallDomainListTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53ResolverFirewallDomainListConfig <a name="DataAwsccRoute53ResolverFirewallDomainListConfig" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

const dataAwsccRoute53ResolverFirewallDomainListConfig: dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53resolver_firewall_domain_list#id DataAwsccRoute53ResolverFirewallDomainList#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53ResolverFirewallDomainListTags <a name="DataAwsccRoute53ResolverFirewallDomainListTags" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

const dataAwsccRoute53ResolverFirewallDomainListTags: dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53ResolverFirewallDomainListTagsList <a name="DataAwsccRoute53ResolverFirewallDomainListTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

new dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference <a name="DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverFirewallDomainList } from '@cdktn/provider-awscc'

new dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags">DataAwsccRoute53ResolverFirewallDomainListTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53ResolverFirewallDomainListTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags">DataAwsccRoute53ResolverFirewallDomainListTags</a>

---



